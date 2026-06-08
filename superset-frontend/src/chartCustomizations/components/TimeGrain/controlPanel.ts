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
<<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/components/UnsavedChangesModal/UnsavedChangesModal.stories.tsx
import { ReactElement } from 'react';
import { UnsavedChangesModal, type UnsavedChangesModalProps } from '.';

export default {
  title: 'Components/UnsavedChangesModal',
  component: UnsavedChangesModal,
};

export const InteractiveUnsavedChangesModal = (
  props: UnsavedChangesModalProps,
): ReactElement => (
  <UnsavedChangesModal {...props}>
    If you don't save, changes will be lost.
  </UnsavedChangesModal>
);

InteractiveUnsavedChangesModal.args = {
  showModal: true,
  onHide: () => {},
  handleSave: () => {},
  onConfirmNavigation: () => {},
  title: 'Unsaved Changes',
};

InteractiveUnsavedChangesModal.argTypes = {
  onHide: { action: 'onHide' },
  handleSave: { action: 'handleSave' },
  onConfirmNavigation: { action: 'onConfirmNavigation' },
};
========
import { ControlPanelConfig } from '@superset-ui/chart-controls';
import { t } from '@apache-superset/core/translation';

const config: ControlPanelConfig = {
  controlPanelSections: [
    {
      label: t('UI Configuration'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'enableEmptyFilter',
            config: {
              type: 'CheckboxControl',
              label: t('Customization value is required'),
              default: false,
              renderTrigger: true,
              description: t(
                'User must select a value before applying the customization',
              ),
            },
          },
        ],
      ],
    },
  ],
};

export default config;
>>>>>>>> 6.1.0:superset-frontend/src/chartCustomizations/components/TimeGrain/controlPanel.ts
