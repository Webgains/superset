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
from unittest.mock import MagicMock

import pandas as pd

from superset.utils.core import GenericDataType
from superset.utils.export_formatting import (
    coerce_csv_numeric_columns,
    csv_parse_kwargs,
    format_export_cell_value,
    get_export_locale_from_form_data,
)


def test_coerce_csv_numeric_columns_keeps_floats() -> None:
    df = pd.DataFrame({"amount": [1234.5, 2935], "name": ["a", "b"]})
    coltypes = [GenericDataType.NUMERIC, GenericDataType.STRING]

    coerced = coerce_csv_numeric_columns(df, coltypes)

    assert coerced["amount"].tolist() == [1234.5, 2935]
    assert pd.api.types.is_numeric_dtype(coerced["amount"])


def test_format_export_cell_value() -> None:
    assert format_export_cell_value(1234.5, "de_DE") == "1234.50"
    assert format_export_cell_value(1234.5, "fr_FR") == "1234.50"
    assert format_export_cell_value(1234.5, "en_GB") == "1234.50"
    assert format_export_cell_value("text", "de_DE") == "text"
    assert format_export_cell_value(None, "de_DE") is None


def test_get_export_locale_from_form_data_ignores_invalid_values() -> None:
    assert get_export_locale_from_form_data(None) is None
    assert get_export_locale_from_form_data({}) is None
    assert get_export_locale_from_form_data({"lang": "zh_CN"}) is None
    assert get_export_locale_from_form_data(MagicMock()) is None
    assert get_export_locale_from_form_data({"lang": "de_DE"}) == "de_DE"
    assert get_export_locale_from_form_data({"lang": "fr_FR"}) == "fr_FR"
    assert get_export_locale_from_form_data({"lang": "en_GB"}) == "en_GB"
    assert get_export_locale_from_form_data({"lang": "pl_PL"}) == "pl_PL"


def test_csv_parse_kwargs_match_locale_delimiters() -> None:
    assert csv_parse_kwargs(None) == {"sep": ",", "decimal": "."}
    assert csv_parse_kwargs("en_GB") == {"sep": ",", "decimal": "."}
    assert csv_parse_kwargs("de_DE") == {"sep": ";", "decimal": "."}
    assert csv_parse_kwargs("fr_FR") == {"sep": ";", "decimal": "."}
