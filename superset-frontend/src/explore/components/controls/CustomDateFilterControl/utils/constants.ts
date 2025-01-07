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
import { t } from '@superset-ui/core';
import {
  SelectOptionType,
} from 'src/explore/components/controls/CustomDateFilterControl/types';

export const SELECT_DAY = 'SELECT_DAY'
export const SELECT_WEEK = 'SELECT_WEEK'
export const SELECT_MONTH = 'SELECT_MONTH'


export const CUSTOM_OPTIONS: SelectOptionType[] = [
  { value: SELECT_DAY, label: t('Select day') },
  { value: SELECT_WEEK, label: t('Select week') },
  { value: SELECT_MONTH, label: t('Select moth') },
];

export const MOMENT_FORMAT = 'YYYY-MM-DD';

export const LOCALE_MAPPING = {
  en: () => import('antd/lib/date-picker/locale/en_US'),
  fr: () => import('antd/lib/date-picker/locale/fr_FR'),
  es: () => import('antd/lib/date-picker/locale/es_ES'),
  it: () => import('antd/lib/date-picker/locale/it_IT'),
  zh: () => import('antd/lib/date-picker/locale/zh_CN'),
  ja: () => import('antd/lib/date-picker/locale/ja_JP'),
  de: () => import('antd/lib/date-picker/locale/de_DE'),
  pt: () => import('antd/lib/date-picker/locale/pt_PT'),
  pt_BR: () => import('antd/lib/date-picker/locale/pt_BR'),
  ru: () => import('antd/lib/date-picker/locale/ru_RU'),
  ko: () => import('antd/lib/date-picker/locale/ko_KR'),
  sk: () => import('antd/lib/date-picker/locale/sk_SK'),
  sl: () => import('antd/lib/date-picker/locale/sl_SI'),
  nl: () => import('antd/lib/date-picker/locale/nl_NL'),
};
