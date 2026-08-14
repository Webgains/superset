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
import {
  resolveNumberFormatLocale,
  NUMBER_FORMAT_LOCALES,
} from './resolveNumberFormatLocale';

test('defaults to en_US when locale is missing', () => {
  expect(resolveNumberFormatLocale(null)).toEqual(NUMBER_FORMAT_LOCALES.en_US);
  expect(resolveNumberFormatLocale(undefined)).toEqual(
    NUMBER_FORMAT_LOCALES.en_US,
  );
});

test('defaults to en_US when locale is unsupported', () => {
  expect(resolveNumberFormatLocale('fr_FR')).toEqual(
    NUMBER_FORMAT_LOCALES.en_US,
  );
});

test('resolves en_US', () => {
  expect(resolveNumberFormatLocale('en_US')).toEqual({
    ...NUMBER_FORMAT_LOCALES.en_US,
  });
  expect(resolveNumberFormatLocale('en_US').decimal).toBe('.');
  expect(resolveNumberFormatLocale('en_US').thousands).toBe(',');
});

test('resolves de_DE', () => {
  expect(resolveNumberFormatLocale('de_DE').decimal).toBe(',');
  expect(resolveNumberFormatLocale('de_DE').thousands).toBe('.');
});
