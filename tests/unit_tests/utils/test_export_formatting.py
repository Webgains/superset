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
import pandas as pd

from superset.utils.core import GenericDataType
from superset.utils.export_formatting import (
    apply_locale_number_formatting,
    format_export_cell_value,
)


def test_apply_locale_number_formatting_de_de() -> None:
    df = pd.DataFrame({"amount": [1234.5, 2935], "name": ["a", "b"]})
    coltypes = [GenericDataType.NUMERIC, GenericDataType.STRING]

    formatted = apply_locale_number_formatting(df, coltypes, "de_DE")

    assert formatted["amount"].tolist() == ["1.234,50", "2.935,00"]
    assert formatted["name"].tolist() == ["a", "b"]


def test_apply_locale_number_formatting_without_locale_is_noop() -> None:
    df = pd.DataFrame({"amount": [1234.5]})
    coltypes = [GenericDataType.NUMERIC]

    result = apply_locale_number_formatting(df, coltypes, None)

    assert result["amount"].tolist() == [1234.5]


def test_format_export_cell_value() -> None:
    assert format_export_cell_value(1234.5, "de_DE") == "1.234,50"
    assert format_export_cell_value("text", "de_DE") == "text"
    assert format_export_cell_value(None, "de_DE") is None
