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
<<<<<<<< HEAD:superset-frontend/src/components/DatabaseSelector/styles.ts
import { styled } from '@superset-ui/core';
import { FormLabel } from '@superset-ui/core/components';

export const StyledFormLabel = styled(FormLabel)`
  display: block;
  font-size: ${({ theme }) => theme.fontSizeSM}px;
  margin-bottom: ${({ theme }) => theme.sizeUnit}px;
`;
========
import { ToastType, ToastMeta } from 'src/components/MessageToasts/types';

const mockMessageToasts: Partial<ToastMeta>[] = [
  { id: 'info_id', toastType: ToastType.Info, text: 'info toast' },
  { id: 'danger_id', toastType: ToastType.Danger, text: 'danger toast' },
];

export default mockMessageToasts;
>>>>>>>> 6.1.0:superset-frontend/src/components/MessageToasts/mockMessageToasts.ts
