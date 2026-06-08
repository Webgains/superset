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
import { SupersetClient } from '@superset-ui/core';

export const setSystemDefaultTheme = (themeId: number) =>
  SupersetClient.put({
    endpoint: `/api/v1/theme/${themeId}/set_system_default`,
  });

export const setSystemDarkTheme = (themeId: number) =>
  SupersetClient.put({
    endpoint: `/api/v1/theme/${themeId}/set_system_dark`,
  });

<<<<<<<< HEAD:superset-frontend/cypress-base/cypress/applitools/chartlist.test.ts
  it('should load the Charts list', () => {
    cy.get('[aria-label="unordered-list"]').click();
    cy.eyesOpen({
      testName: 'Charts list-view',
    });
    cy.eyesCheckWindow('Charts list-view loaded');
  });

  it('should load the Charts card list', () => {
    cy.get('[aria-label="appstore"]').click();
    cy.eyesOpen({
      testName: 'Charts card-view',
    });
    cy.eyesCheckWindow('Charts card-view loaded');
========
export const unsetSystemDefaultTheme = () =>
  SupersetClient.delete({
    endpoint: `/api/v1/theme/unset_system_default`,
  });

export const unsetSystemDarkTheme = () =>
  SupersetClient.delete({
    endpoint: `/api/v1/theme/unset_system_dark`,
>>>>>>>> 6.1.0:superset-frontend/src/features/themes/api.ts
  });
