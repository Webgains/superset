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
<<<<<<<< HEAD:superset-frontend/plugins/plugin-chart-ag-grid-table/src/index.ts
import { Behavior, ChartMetadata, ChartPlugin, t } from '@superset-ui/core';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';
import example1 from './images/Table.jpg';
import example2 from './images/Table2.jpg';
import example3 from './images/Table3.jpg';
========
import { t } from '@apache-superset/core/translation';
import { ChartMetadata, ChartPlugin, ChartLabel } from '@superset-ui/core';
import transformProps from '../transformProps';
import example from './images/example.jpg';
import exampleDark from './images/example-dark.jpg';
import thumbnail from './images/thumbnail.png';
import thumbnailDark from './images/thumbnail-dark.png';
>>>>>>>> 6.1.0:superset-frontend/plugins/legacy-preset-chart-nvd3/src/Bubble/index.ts
import controlPanel from './controlPanel';
import buildQuery from './buildQuery';
import { TableChartFormData, TableChartProps } from './types';

// must export something for the module to be exist in dev mode
export { default as __hack__ } from './types';
export * from './types';

const metadata = new ChartMetadata({
<<<<<<<< HEAD:superset-frontend/plugins/plugin-chart-ag-grid-table/src/index.ts
  behaviors: [
    Behavior.InteractiveChart,
    Behavior.DrillToDetail,
    Behavior.DrillBy,
  ],
  category: t('Table'),
  canBeAnnotationTypes: ['EVENT', 'INTERVAL'],
  description: t(
    'Classic row-by-column spreadsheet like view of a dataset. Use tables to showcase a view into the underlying data or to show aggregated metrics.',
  ),
  exampleGallery: [{ url: example1 }, { url: example2 }, { url: example3 }],
  name: t('Table V2'),
  tags: [
    t('Additive'),
    t('Business'),
    t('Pattern'),
    t('Featured'),
    t('Report'),
    t('Sequential'),
    t('Tabular'),
  ],
  thumbnail,
});

export default class AgGridTableChartPlugin extends ChartPlugin<
  TableChartFormData,
  TableChartProps
> {
========
  category: t('Correlation'),
  credits: ['http://nvd3.org'],
  description: t(
    'Visualizes a metric across three dimensions of data in a single chart (X axis, Y axis, and bubble size). Bubbles from the same group can be showcased using bubble color.',
  ),
  exampleGallery: [{ url: example, urlDark: exampleDark }],
  label: ChartLabel.Deprecated,
  name: t('Bubble Chart (legacy)'),
  tags: [
    t('Multi-Dimensions'),
    t('Comparison'),
    t('Legacy'),
    t('Scatter'),
    t('Time'),
    t('Trend'),
    t('nvd3'),
  ],
  thumbnail,
  thumbnailDark,
  useLegacyApi: true,
});

/**
 * @deprecated in version 4.0.
 */
export default class BubbleChartPlugin extends ChartPlugin {
>>>>>>>> 6.1.0:superset-frontend/plugins/legacy-preset-chart-nvd3/src/Bubble/index.ts
  constructor() {
    super({
      loadChart: () => import('./AgGridTableChart'),
      metadata,
      transformProps,
      controlPanel,
      buildQuery,
    });
  }
}
