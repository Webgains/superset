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

from typing import Literal, TypedDict

NumberFormatLocaleCode = Literal["en_US", "de_DE"]


class NumberFormatLocale(TypedDict):
    code: NumberFormatLocaleCode
    decimal: str
    thousands: str
    csv_sep: str | None


NUMBER_FORMAT_LOCALES: dict[str, NumberFormatLocale] = {
    "en_US": {
        "code": "en_US",
        "decimal": ".",
        "thousands": ",",
        "csv_sep": None,
    },
    "de_DE": {
        "code": "de_DE",
        "decimal": ",",
        "thousands": ".",
        "csv_sep": None,
    },
}


def resolve_number_format_locale(locale: str | None) -> NumberFormatLocale:
    """Map a URL/form_data locale code to export formatting rules."""
    if locale in NUMBER_FORMAT_LOCALES:
        return NUMBER_FORMAT_LOCALES[locale]
    return NUMBER_FORMAT_LOCALES["en_US"]


def format_number_for_locale(value: float | int, locale: NumberFormatLocale) -> str:
    """
    Format a number with thousands separators matching the chart UI.

    en_US → 1,234.56
    de_DE → 1.234,56
    """
    formatted = f"{float(value):,.2f}"
    if locale["code"] == "en_US":
        return formatted
    if "." not in formatted:
        return formatted
    integer_part, decimal_part = formatted.split(".", 1)
    return f"{integer_part.replace(',', '.')},{decimal_part}"
