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
<<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/components/Alert/index.tsx
import { Alert as AntdAlert } from 'antd';
import type { AlertProps } from './types';

export const Alert = (props: AlertProps) => {
  const {
    type = 'info',
    description,
    showIcon = true,
    closable = true,
    children,
    ...rest
  } = props;

  return (
    <AntdAlert
      role="alert"
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      type={type}
      showIcon={showIcon}
      closable={closable}
      message={children || 'Default message'}
      description={description}
      {...rest}
    />
  );
};

export type { AlertProps };
========
import React from 'react';
import { ensureIsArray } from '@superset-ui/core';
import { views } from 'src/core';
import { resolveView } from 'src/core/views';

export interface ViewListExtensionProps {
  viewId: string;
}

const ViewListExtension = ({ viewId }: ViewListExtensionProps) => {
  const viewItems = ensureIsArray(views.getViews(viewId));

  return (
    <>
      {viewItems
        .filter(view => view && typeof view.id !== 'undefined')
        .map(view => (
          <React.Fragment key={view.id}>{resolveView(view.id)}</React.Fragment>
        ))}
    </>
  );
};

export default ViewListExtension;
>>>>>>>> 6.1.0:superset-frontend/src/components/ViewListExtension/index.tsx
