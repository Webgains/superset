/* eslint-disable camelcase */
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
<<<<<<<< HEAD:superset-frontend/plugins/plugin-chart-ag-grid-table/src/utils/getAggFunc.ts
import { CUSTOM_AGG_FUNCS } from '../consts';
import { InputColumn } from '../types';

export const getAggFunc = (col: InputColumn) =>
  col.isMetric || col.isPercentMetric
    ? CUSTOM_AGG_FUNCS.queryTotal
    : col.isNumeric
      ? 'sum'
      : undefined;
========
import { ChartProps } from '@superset-ui/core';

export default function transformProps(chartProps: ChartProps) {
  const { formData, height, width, filterState, hooks, ownState } = chartProps;

  return {
    formData,
    height,
    width,
    filterState,
    setDataMask: hooks.setDataMask,
    ownState,
  };
}
>>>>>>>> 6.1.0:superset-frontend/src/chartCustomizations/components/DeckglLayerVisibility/transformProps.ts
