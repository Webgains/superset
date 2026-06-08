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
<<<<<<<< HEAD:superset-frontend/plugins/plugin-chart-ag-grid-table/src/utils/extent.ts

import { isNil } from 'lodash';

export default function extent<T = number | string | Date | undefined | null>(
  values: T[],
) {
  let min: T | undefined;
  let max: T | undefined;
  // eslint-disable-next-line no-restricted-syntax
  for (const value of values) {
    if (value !== null) {
      if (isNil(min)) {
        if (value !== undefined) {
          min = value;
          max = value;
        }
      } else if (value !== undefined) {
        if (min > value) {
          min = value;
        }
        if (!isNil(max)) {
          if (max < value) {
            max = value;
          }
        }
      }
    }
========
import { t } from '@apache-superset/core/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/core';
import transformProps from '../transformProps';
import thumbnail from './images/thumbnail.png';
import thumbnailDark from './images/thumbnail-dark.png';
import example from './images/example.jpg';
import exampleDark from './images/example-dark.jpg';
import controlPanel from './controlPanel';

const metadata = new ChartMetadata({
  category: t('Evolution'),
  credits: ['http://nvd3.org'],
  description: t(
    'Compares metrics between different time periods. Displays time series data across multiple periods (like weeks or months) to show period-over-period trends and patterns.',
  ),
  exampleGallery: [{ url: example, urlDark: exampleDark }],
  name: t('Time-series Period Pivot'),
  tags: [t('Legacy'), t('Time'), t('nvd3')],
  thumbnail,
  thumbnailDark,
  useLegacyApi: true,
});

export default class TimePivotChartPlugin extends ChartPlugin {
  constructor() {
    super({
      loadChart: () => import('../ReactNVD3'),
      metadata,
      transformProps,
      controlPanel,
    });
>>>>>>>> 6.1.0:superset-frontend/plugins/legacy-preset-chart-nvd3/src/TimePivot/index.ts
  }
  return [min, max];
}
