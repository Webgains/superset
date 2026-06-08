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

/**
<<<<<<<< HEAD:superset-frontend/eslint-rules/eslint-plugin-icons/index.js
 * @fileoverview Rule to warn about direct imports from @ant-design/icons
========
 * @fileoverview Test file for the no-fa-icons-usage rule
>>>>>>>> 6.1.0:superset-frontend/eslint-rules/eslint-plugin-icons/no-fontawesome.test.ts
 * @author Apache
 */

import type { Rule } from 'eslint';

<<<<<<<< HEAD:superset-frontend/eslint-rules/eslint-plugin-icons/index.js
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  rules: {
    'no-fa-icons-usage': {
      meta: {
        type: 'problem',
        docs: {
          description:
            'Disallow the usage of FontAwesome icons in the codebase',
          category: 'Best Practices',
        },
        schema: [],
      },
      create(context) {
        return {
          // Check for JSX elements with class names containing "fa"
          JSXElement(node) {
            if (
              node.openingElement &&
              node.openingElement.name.name === 'i' &&
              node.openingElement.attributes &&
              node.openingElement.attributes.some(
                attr =>
                  attr.name &&
                  attr.name.name === 'className' &&
                  /fa fa-/.test(attr.value.value),
              )
            ) {
              context.report({
                node,
                message:
                  'FontAwesome icons should not be used. Use the src/components/Icons component instead.',
              });
            }
          },
        };
      },
    },
========
const { RuleTester } = require('eslint');
const plugin: { rules: Record<string, Rule.RuleModule> } = require('.');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } },
});
const rule: Rule.RuleModule = plugin.rules['no-fa-icons-usage'];

const errors: Array<{ message: string }> = [
  {
    message:
      'FontAwesome icons should not be used. Use the src/components/Icons component instead.',
>>>>>>>> 6.1.0:superset-frontend/eslint-rules/eslint-plugin-icons/no-fontawesome.test.ts
  },
];

ruleTester.run('no-fa-icons-usage', rule, {
  valid: ['<Icons.Database />', '<Icons.Search />'],
  invalid: [
    {
      code: '<i className="fa fa-database"></i>',
      errors,
    },
    {
      code: '<i className="fa fa-search"></i>',
      errors,
    },
    {
      code: '<i className="fa fa-home"></i>',
      errors,
    },
    {
      code: '<i className="fa fa-arrow-right"></i>',
      errors,
    },
  ],
});
