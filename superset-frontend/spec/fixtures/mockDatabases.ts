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
<<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/components/EditableTitle/EditableTitle.stories.tsx
import { EditableTitle } from '.';
import type { EditableTitleProps } from './types';

export default {
  title: 'Components/EditableTitle',
  component: EditableTitle,
};

export const InteractiveEditableTitle = (props: EditableTitleProps) => (
  <EditableTitle {...props} />
);

InteractiveEditableTitle.args = {
  canEdit: true,
  editing: false,
  emptyText: 'Empty text',
  noPermitTooltip: 'Not permitted',
  showTooltip: true,
  title: 'Title',
  defaultTitle: 'Default title',
  placeholder: 'Placeholder',
  maxWidth: 100,
  autoSize: true,
};

InteractiveEditableTitle.argTypes = {
  onSaveTitle: { action: 'onSaveTitle' },
========

export default {
  1: {
    allow_ctas: false,
    allow_cvas: false,
    allow_dml: false,
    allow_file_upload: false,
    allow_run_async: true,
    backend: 'postgresql',
    database_name: 'examples',
    expose_in_sqllab: true,
    force_ctas_schema: null,
    id: 1,
  },
};

export const disabledAsyncDb = {
  21: {
    allow_ctas: false,
    allow_cvas: false,
    allow_dml: false,
    allow_file_upload: false,
    allow_run_async: false,
    backend: 'postgresql',
    database_name: 'examples',
    expose_in_sqllab: true,
    force_ctas_schema: null,
    id: 21,
  },
>>>>>>>> 6.1.0:superset-frontend/spec/fixtures/mockDatabases.ts
};
