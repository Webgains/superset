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
from typing import Any

import pandas as pd

from superset.utils.core import GenericDataType
from superset.utils.number_format_locale import (
    format_number_for_locale,
    resolve_number_format_locale,
)


def get_export_locale_from_form_data(form_data: dict[str, Any] | None) -> str | None:
    if not form_data:
        return None
    locale = form_data.get("locale")
    return str(locale) if locale else None


def is_formattable_number(value: object) -> bool:
    """Return True when a value should receive locale number formatting."""
    if isinstance(value, bool):
        return False
    return isinstance(value, numbers.Real)


def format_export_cell_value(value: Any, locale_code: str | None) -> Any:
    """Format a single export cell value when it is numeric."""
    if value is None or (isinstance(value, float) and pd.isna(value)):
        return value
    if pd.isna(value):
        return value
    if not is_formattable_number(value):
        return value

    locale = resolve_number_format_locale(locale_code)
    return format_number_for_locale(float(value), locale)


def apply_locale_number_formatting(
    df: pd.DataFrame,
    coltypes: list[GenericDataType],
    locale_code: str | None,
) -> pd.DataFrame:
    """
    Format numeric columns as locale-aware strings for CSV/XLSX export.

    Numeric cells become display strings (Strategy A) so downloads match chart UI.
    """
    if not locale_code:
        return df

    locale = resolve_number_format_locale(locale_code)
    out = df.copy()
    for column, column_type in zip(out.columns, coltypes, strict=False):
        if column_type != GenericDataType.NUMERIC:
            continue
        out[column] = out[column].map(
            lambda value: (
                format_number_for_locale(float(value), locale)
                if is_formattable_number(value) and not pd.isna(value)
                else value
            )
        )
    return out
