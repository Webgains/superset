/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { DEFAULT_D3_FORMAT } from '@superset-ui/core';
import { getUrlParam } from 'src/utils/urlUtils';
import {
  getNumberFormatLocaleParam,
  resolveNumberFormatLocale,
  NUMBER_FORMAT_LOCALES,
  NumberFormatLocaleCode,
} from './resolveNumberFormatLocale';

jest.mock('src/utils/urlUtils', () => ({
  getUrlParam: jest.fn(),
}));

const getUrlParamMock = getUrlParam as jest.Mock;

beforeEach(() => {
  getUrlParamMock.mockReset();
});

test('reads the locale URL parameter before the embedded lang parameter', () => {
  getUrlParamMock.mockReturnValueOnce('de_DE').mockReturnValueOnce('es_ES');

  expect(getNumberFormatLocaleParam()).toBe('de_DE');
});

test('reads the embedded lang parameter when locale is absent or unsupported', () => {
  getUrlParamMock.mockReturnValueOnce(null).mockReturnValueOnce('es_ES');
  expect(getNumberFormatLocaleParam()).toBe('es_ES');

  getUrlParamMock.mockReturnValueOnce('zh_CN').mockReturnValueOnce('fr_FR');
  expect(getNumberFormatLocaleParam()).toBe('fr_FR');
});

test('ignores bare and unsupported URL locale codes', () => {
  getUrlParamMock.mockReturnValueOnce(null).mockReturnValueOnce('es');
  expect(getNumberFormatLocaleParam()).toBeUndefined();
});

test('defaults to server d3_format when locale is missing', () => {
  const d3Format = { decimal: ',', thousands: '.' };
  expect(resolveNumberFormatLocale(null, d3Format)).toEqual({
    ...DEFAULT_D3_FORMAT,
    ...d3Format,
  });
  expect(resolveNumberFormatLocale(undefined, d3Format)).toEqual({
    ...DEFAULT_D3_FORMAT,
    ...d3Format,
  });
});

test('defaults to server d3_format when locale is unsupported', () => {
  const d3Format = { decimal: ',', thousands: '.' };
  expect(resolveNumberFormatLocale('zh_CN', d3Format)).toEqual({
    ...DEFAULT_D3_FORMAT,
    ...d3Format,
  });
});

test.each<[NumberFormatLocaleCode, string, string]>([
  ['en_US', '.', ','],
  ['en_GB', '.', ','],
  ['de_DE', ',', '.'],
  ['es_ES', ',', '.'],
  ['it_IT', ',', '.'],
  ['nl_NL', ',', '.'],
  ['fr_FR', ',', '.'],
  ['pl_PL', ',', '.'],
])('resolves %s separators', (locale, decimal, thousands) => {
  expect(resolveNumberFormatLocale(locale)).toEqual({
    ...NUMBER_FORMAT_LOCALES[locale],
  });
  expect(resolveNumberFormatLocale(locale).decimal).toBe(decimal);
  expect(resolveNumberFormatLocale(locale).thousands).toBe(thousands);
});
