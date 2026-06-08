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
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';
<<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/spec/index.tsx
import { themeObject } from '@superset-ui/core';

// Define the wrapper component outside
const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
========
import { themeObject } from './theme';

// Define the wrapper component outside
const Providers = ({ children }: { children: React.ReactNode }) => (
>>>>>>>> 6.1.0:superset-frontend/packages/superset-core/src/testing.tsx
  <themeObject.SupersetThemeProvider>
    {children}
  </themeObject.SupersetThemeProvider>
);

// Follow the exact pattern from RTL docs
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
<<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/spec/index.tsx
) => render(ui, { wrapper: AllTheProviders, ...options });
========
) => render(ui, { wrapper: Providers, ...options });
>>>>>>>> 6.1.0:superset-frontend/packages/superset-core/src/testing.tsx

export {
  createEvent,
  fireEvent,
  screen,
  waitFor,
  cleanup,
  within,
  act,
} from '@testing-library/react';
export { customRender as render, userEvent };
