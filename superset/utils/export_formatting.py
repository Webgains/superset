# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
from __future__ import annotations

import numbers
from decimal import Decimal
from typing import Any
from urllib.parse import parse_qs, urlparse

import pandas as pd

from superset.utils.core import GenericDataType
from superset.utils.number_format_locale import (
    get_csv_separator,
    normalize_number_format_locale,
    resolve_number_format_locale,
)


def get_export_locale_from_form_data(form_data: dict[str, Any] | None) -> str | None:
    """
    Resolve export locale from the embed ``lang`` query param (e.g. ``fr_FR``).

    Checks, in order:
    1. ``lang`` on chart ``form_data`` (copied from the iframe URL on export)
    2. ``lang`` on the export HTTP request
    3. ``lang`` on the Referer URL
    """
    if isinstance(form_data, dict):
        if locale := normalize_number_format_locale(form_data.get("lang")):
            return locale

    try:
        from flask import has_request_context, request

        if not has_request_context():
            return None

        if locale := normalize_number_format_locale(request.args.get("lang")):
            return locale

        referer = request.headers.get("Referer")
        if referer:
            referer_lang = parse_qs(urlparse(referer).query).get("lang", [None])[0]
            if locale := normalize_number_format_locale(referer_lang):
                return locale
    except RuntimeError:
        return None

    return None


def csv_export_kwargs(locale_code: str | None) -> dict[str, Any]:
    """CSV_EXPORT config plus locale delimiter and decimal (numeric cells)."""
    from flask import current_app

    kwargs: dict[str, Any] = {
        **current_app.config["CSV_EXPORT"],
        "sep": get_csv_separator(locale_code),
    }
    if normalize_number_format_locale(locale_code):
        loc = resolve_number_format_locale(locale_code)
        kwargs["decimal"] = loc["decimal"]
        kwargs["float_format"] = "%.2f"
    return kwargs


def csv_parse_kwargs(locale_code: str | None) -> dict[str, Any]:
    """pandas ``read_csv`` kwargs matching locale CSV delimiters and decimals."""
    kwargs: dict[str, Any] = {"sep": get_csv_separator(locale_code)}
    if normalize_number_format_locale(locale_code):
        loc = resolve_number_format_locale(locale_code)
        kwargs["decimal"] = loc["decimal"]
    return kwargs


def _to_export_float(value: object) -> float:
    if isinstance(value, Decimal):
        return float(value)
    if isinstance(value, numbers.Real) and not isinstance(value, bool):
        return float(value)
    raise TypeError(f"Expected numeric export value, got {type(value)!r}")


def is_formattable_number(value: object) -> bool:
    """Return True when a value should receive locale number formatting."""
    if isinstance(value, bool):
        return False
    if isinstance(value, Decimal):
        return True
    return isinstance(value, numbers.Real)


def column_should_receive_locale_formatting(
    column_type: GenericDataType,
    series: pd.Series,
) -> bool:
    """
    Decide whether a column should be locale-formatted on export.

    Column metadata often marks computed metrics as STRING even when the query
    returns numeric values, so dtype and sample values are used as fallbacks.
    """
    if column_type in (GenericDataType.TEMPORAL, GenericDataType.BOOLEAN):
        return False
    if column_type == GenericDataType.NUMERIC:
        return True
    if pd.api.types.is_numeric_dtype(series):
        return True
    if series.dtype == object:
        sample = series.dropna().head(50)
        if len(sample) > 0 and all(is_formattable_number(value) for value in sample):
            return True
    return False


def format_export_cell_value(value: Any, locale_code: str | None) -> Any:
    """Format a streaming CSV cell as a locale decimal number (no thousands)."""
    if value is None or (isinstance(value, float) and pd.isna(value)):
        return value
    if pd.isna(value):
        return value
    if not is_formattable_number(value):
        return value

    locale = resolve_number_format_locale(locale_code)
    formatted = f"{_to_export_float(value):.2f}"
    if formatted.lower() in {"inf", "-inf", "nan"}:
        return formatted
    return formatted.replace(".", locale["decimal"])


def coerce_csv_numeric_columns(
    df: pd.DataFrame,
    coltypes: list[GenericDataType],
) -> pd.DataFrame:
    """Coerce metric columns to numeric dtypes so CSV writes real numbers."""
    out = df.copy()
    for index, column in enumerate(out.columns):
        column_type = (
            coltypes[index] if index < len(coltypes) else GenericDataType.STRING
        )
        series = out[column]
        if not column_should_receive_locale_formatting(column_type, series):
            continue
        if pd.api.types.is_numeric_dtype(series) and series.dtype != object:
            continue
        out[column] = pd.to_numeric(series, errors="coerce")
    return out
