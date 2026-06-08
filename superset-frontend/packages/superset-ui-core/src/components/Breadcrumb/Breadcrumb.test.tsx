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
import { render, screen } from '@superset-ui/core/spec';
import '@testing-library/jest-dom';
import { Breadcrumb } from '.';

<<<<<<<< HEAD:superset-frontend/cypress-base/cypress/applitools/explore.test.ts
describe('explore view', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/superset/explore_json/**').as('getJson');
  });
========
describe('Breadcrumb Component', () => {
  test('renders breadcrumb items correctly', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Library</Breadcrumb.Item>
        <Breadcrumb.Item>Data</Breadcrumb.Item>
      </Breadcrumb>,
    );
>>>>>>>> 6.1.0:superset-frontend/packages/superset-ui-core/src/components/Breadcrumb/Breadcrumb.test.tsx

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Library')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeInTheDocument();

<<<<<<<< HEAD:superset-frontend/cypress-base/cypress/applitools/explore.test.ts
  it('should load Explore', () => {
    const LINE_CHART_DEFAULTS = {
      ...FORM_DATA_DEFAULTS,
      viz_type: 'echarts_timeseries_line',
    };
    const formData = { ...LINE_CHART_DEFAULTS, metrics: [NUM_METRIC] };
    cy.visitChartByParams(formData);
    cy.verifySliceSuccess({ waitAlias: '@getJson', chartSelector: 'svg' });
    cy.eyesOpen({
      testName: 'Explore page',
    });
    cy.eyesCheckWindow('Explore loaded');
========
    const separators = screen.getAllByText('/');
    expect(separators.length).toBe(2);
>>>>>>>> 6.1.0:superset-frontend/packages/superset-ui-core/src/components/Breadcrumb/Breadcrumb.test.tsx
  });
});
