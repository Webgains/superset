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
<<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/components/Alert/types.ts
import type { PropsWithChildren } from 'react';
import type { AlertProps as AntdAlertProps } from 'antd/es/alert';

export type AlertProps = PropsWithChildren<
  Omit<AntdAlertProps, 'children'> & { roomBelow?: boolean }
>;
========
import { ChartProps } from '@superset-ui/core';
import { transformSpatialProps } from '../spatialUtils';

export default function transformProps(chartProps: ChartProps) {
  return transformSpatialProps(chartProps);
}
>>>>>>>> 6.1.0:superset-frontend/plugins/legacy-preset-chart-deckgl/src/layers/Grid/transformProps.ts
