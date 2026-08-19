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
from superset.utils.number_format_locale import (
    format_number_for_locale,
    resolve_number_format_locale,
)


def test_resolve_number_format_locale_defaults_to_en_us() -> None:
    locale = resolve_number_format_locale(None)
    assert locale["code"] == "en_US"
    assert locale["decimal"] == "."
    assert locale["thousands"] == ","

    assert resolve_number_format_locale("fr_FR")["code"] == "en_US"


def test_resolve_number_format_locale_de_de() -> None:
    locale = resolve_number_format_locale("de_DE")
    assert locale["code"] == "de_DE"
    assert locale["decimal"] == ","
    assert locale["thousands"] == "."


def test_format_number_for_locale_en_us() -> None:
    locale = resolve_number_format_locale("en_US")
    assert format_number_for_locale(1234.5, locale) == "1,234.50"
    assert format_number_for_locale(0, locale) == "0.00"


def test_format_number_for_locale_de_de() -> None:
    locale = resolve_number_format_locale("de_DE")
    assert format_number_for_locale(1234.5, locale) == "1.234,50"
    assert format_number_for_locale(2935, locale) == "2.935,00"
