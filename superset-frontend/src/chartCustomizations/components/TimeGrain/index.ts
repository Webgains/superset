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
<<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/components/Typography/index.tsx
import { styled, css } from '@superset-ui/core';
import { Typography as AntdTypography } from 'antd';

export type { TitleProps } from 'antd/es/typography/Title';
export type { ParagraphProps } from 'antd/es/typography/Paragraph';

const StyledLink = styled(AntdTypography.Link)`
    ${({ theme }) =>
      css`
      && {
        color: ${theme.colorLink};
        &:hover {
          color: ${theme.colorLinkHover};
        }
    `}
========
import { t } from '@apache-superset/core/translation';
import { Behavior, ChartMetadata, ChartPlugin } from '@superset-ui/core';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

export default class ChartCustomizationTimeGrainPlugin extends ChartPlugin {
  constructor() {
    const metadata = new ChartMetadata({
      name: t('Time grain'),
      description: t('Time grain chart customization plugin'),
      behaviors: [Behavior.InteractiveChart, Behavior.ChartCustomization],
      tags: [t('Experimental')],
      thumbnail,
    });

    super({
      buildQuery,
      controlPanel,
      loadChart: () => import('./TimeGrainFilterPlugin'),
      metadata,
      transformProps,
    });
>>>>>>>> 6.1.0:superset-frontend/src/chartCustomizations/components/TimeGrain/index.ts
  }
`;

export const Typography: typeof AntdTypography = Object.assign(AntdTypography, {
  Text: AntdTypography.Text,
  Link: StyledLink,
  Title: AntdTypography.Title,
  Paragraph: AntdTypography.Paragraph,
});
export type { TypographyProps } from 'antd';
