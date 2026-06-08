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
<<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/types/react-syntax-highlighter.d.ts
declare module 'react-syntax-highlighter/dist/cjs/light' {
  import SyntaxHighlighter from 'react-syntax-highlighter';
  export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/hljs/github' {
  const style: any;
  export default style;
}

type SupportedLanguages = 'markdown' | 'htmlbars' | 'sql' | 'json';

// For type checking when importing languages
function importLanguage<T extends SupportedLanguages>(language: T) {
  return import(`react-syntax-highlighter/dist/cjs/languages/hljs/${language}`);
========

import { SetDataMaskHook } from '@superset-ui/core';
import { FilterBarOrientation } from 'src/dashboard/types';

export interface PluginFilterStylesProps {
  height: number;
  width: number;
  orientation?: FilterBarOrientation;
  overflow?: boolean;
}

export interface PluginFilterHooks {
  setDataMask: SetDataMaskHook;
  setFocusedFilter: () => void;
  unsetFocusedFilter: () => void;
  setHoveredFilter: () => void;
  unsetHoveredFilter: () => void;
  setFilterActive: (isActive: boolean) => void;
>>>>>>>> 6.1.0:superset-frontend/src/chartCustomizations/components/types.ts
}
