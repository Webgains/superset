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
<<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/components/Form/Form.tsx
import { Form as AntdForm } from 'antd';
import { FormProps } from './types';

function CustomForm(props: FormProps) {
  return <AntdForm {...props} />;
}

export const Form = Object.assign(CustomForm, {
  useForm: AntdForm.useForm,
  Item: AntdForm.Item,
  List: AntdForm.List,
  ErrorList: AntdForm.ErrorList,
  Provider: AntdForm.Provider,
========

import { isMatrixifyEnabled, MatrixifyGridRenderer } from './matrixify.mocks';

test('isMatrixifyEnabled mock returns false by default', () => {
  expect(isMatrixifyEnabled()).toBe(false);
});

test('MatrixifyGridRenderer mock returns null by default', () => {
  expect(MatrixifyGridRenderer()).toBeNull();
>>>>>>>> 6.1.0:superset-frontend/packages/superset-ui-core/src/chart/types/matrixify.mocks.test.ts
});
