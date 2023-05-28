import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  selectLanguage,
  setSetting
} from './Settings';
import { useTranslation } from 'react-i18next';

export function SelectSettings({ name, options }: { name: string, options: any }) {
  const settingValue = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();

  const changeSetting = (e) => {
    if (e.target.name === 'language') {
      i18n.changeLanguage(e.target.value);
    }
    dispatch(setSetting({
        name: name,
        value: e.target.value
    }));
  }

  return (
    <div>
        {settingValue}
        <select
            aria-label={name}
            name={name}
            value={settingValue}
            onChange={changeSetting}
        >
            {Object.keys(options).map((key) => (
                <option key={key} value={key}>
                    {options[key]}
                </option>
            ))}
        </select>
    </div>
  );
}