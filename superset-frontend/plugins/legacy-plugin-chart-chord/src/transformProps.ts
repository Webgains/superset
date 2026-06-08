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
<<<<<<<< HEAD:superset-frontend/src/components/CopyToClipboard/types.ts
import type { ReactNode } from 'react';

export interface CopyToClipboardProps {
  copyNode?: ReactNode;
  getText?: (callback: (data: string) => void) => void;
  onCopyEnd?: () => void;
  shouldShowText?: boolean;
  text?: string;
  wrapped?: boolean;
  tooltipText?: string;
  addDangerToast: (msg: string) => void;
  addSuccessToast: (msg: string) => void;
  hideTooltip?: boolean;
========
import { ChartProps } from '@superset-ui/core';

export default function transformProps(chartProps: ChartProps) {
  const { width, height, formData, queriesData } = chartProps;
  const { yAxisFormat, colorScheme, sliceId } = formData;

  return {
    colorScheme,
    data: queriesData[0].data,
    height,
    numberFormat: yAxisFormat,
    width,
    sliceId,
  };
>>>>>>>> 6.1.0:superset-frontend/plugins/legacy-plugin-chart-chord/src/transformProps.ts
}
