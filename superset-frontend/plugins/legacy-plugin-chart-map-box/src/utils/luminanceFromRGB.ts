/*
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
import { staticAssetsPrefix } from 'src/utils/getBootstrapData';

<<<<<<<< HEAD:superset-frontend/src/utils/assetUrl.ts
/**
 * Takes a string path to a static asset and prefixes it with the defined static asset prefix
 * defined in the bootstrap data
 * @param path A string path to a resource
 */
export function assetUrl(path: string) {
  return `${staticAssetsPrefix()}${path.startsWith('/') ? path : `/${path}`}`;
========
export const LUMINANCE_RED_WEIGHT = 0.2126;
export const LUMINANCE_GREEN_WEIGHT = 0.7152;
export const LUMINANCE_BLUE_WEIGHT = 0.0722;

export default function luminanceFromRGB(
  r: number,
  g: number,
  b: number,
): number {
  // Formula: https://en.wikipedia.org/wiki/Relative_luminance
  return (
    LUMINANCE_RED_WEIGHT * r +
    LUMINANCE_GREEN_WEIGHT * g +
    LUMINANCE_BLUE_WEIGHT * b
  );
>>>>>>>> 6.1.0:superset-frontend/plugins/legacy-plugin-chart-map-box/src/utils/luminanceFromRGB.ts
}
