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
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { PickerLocale } from 'antd/lib/date-picker/generatePicker';
import { Moment } from 'moment';
import { t } from '@superset-ui/core';
import { Radio } from 'src/components/Radio';
import { Col, Row } from 'src/components';
import { DatePicker } from 'src/components/DatePicker';
import {
  MOMENT_FORMAT,
  LOCALE_MAPPING,
} from 'src/explore/components/controls/DateFilterControl/utils';
import {
  CustomFrameComponentProps,
} from 'src/explore/components/controls/CustomDateFilterControl/types';
import { ExplorePageState } from 'src/explore/types';
import Loading from 'src/components/Loading';
import moment from 'moment';
import { CUSTOM_OPTIONS, SELECT_DAY, SELECT_MONTH, SELECT_WEEK } from '../utils/constants';



const currentOptionTranslator = (currentSelector: string) => {
  const map = {
    [SELECT_DAY]: 'date',
    [SELECT_WEEK]: 'week',
    [SELECT_MONTH]: 'month',
  }
  return map[currentSelector as keyof typeof map] as any
}


export function CustomFrame(props: CustomFrameComponentProps) {
  const [datePickerLocale, setDatePickerLocale] = useState<
    PickerLocale | undefined | null
  >(null);

  const encodeDate = (startDate: Moment) => {
    startDate = startDate.startOf('day')
    let endDate = moment.utc(startDate).endOf('day')
    if (props.currentSelector == SELECT_WEEK) {
      startDate = startDate.startOf('week')
      endDate = endDate.endOf('week')
    } else if (props.currentSelector == SELECT_MONTH) {
      startDate = startDate.startOf('month')
      endDate = endDate.endOf('month')
    }
    const days = endDate.diff(startDate, 'day') + 1
    return `${startDate.format(MOMENT_FORMAT)} : ${startDate.clone().add(days, 'day').format(MOMENT_FORMAT)}`
  }

  function onChange(startDate: Moment) {
    props.onChange(encodeDate(startDate));
  }

  // check if there is a locale defined for explore
  const localFromFlaskBabel = useSelector(
    (state: ExplorePageState) => state?.common?.locale,
  );

  useEffect(() => {
    let startDate = moment.utc()
    if (props.value.indexOf(' : ') !== -1) {
      startDate = moment.utc(props.value.split(' : ')[0])
    }
    onChange(startDate)
  }, [props.currentSelector]);

  // An undefined datePickerLocale is acceptable if no match is found in the LOCALE_MAPPING[localFromFlaskBabel] lookup
  // and will fall back to antd's default locale when the antd DataPicker's prop locale === undefined
  // This also protects us from the case where state is populated with a locale that antd locales does not recognize
  useEffect(() => {
    if (datePickerLocale === null) {
      if (localFromFlaskBabel && LOCALE_MAPPING[localFromFlaskBabel]) {
        LOCALE_MAPPING[localFromFlaskBabel]()
          .then((locale: { default: PickerLocale }) =>
            setDatePickerLocale(locale.default),
          )
          .catch(() => setDatePickerLocale(undefined));
      } else {
        setDatePickerLocale(undefined);
      }
    }
  }, [datePickerLocale, localFromFlaskBabel]);

  if (datePickerLocale === null) {
    return <Loading position="inline-centered" />;
  }

  return (
    <div data-test="custom-frame">
      <div className="section-title">{t('Configure custom time range')}</div>
      <Row gutter={24}>
      <Col span={12}>
      <Radio.Group
        value={props.currentSelector}
        onChange={(e: any) => props.setCurrentSelector(e.target.value)}
      >
        {CUSTOM_OPTIONS.map(({ value, label }) => (
          <Radio key={value} value={value} className="vertical-radio">
            {label}
          </Radio>
        ))}
      </Radio.Group>
      </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
            <Row>
              <DatePicker
                picker={currentOptionTranslator(props.currentSelector)}
                defaultValue={moment.utc().startOf('day')}
                onChange={(datetime: Moment) => onChange(datetime)}
                allowClear={false}
                locale={datePickerLocale}
              />
            </Row>
        </Col>
      </Row>
    </div>
  );
}
