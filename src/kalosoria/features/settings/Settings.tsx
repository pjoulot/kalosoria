import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../app/store';
import { useTranslation } from 'react-i18next';

export interface SettingsState {
  language: string;
}

export interface SettingValue {
    name: string;
    value: any;
}

const initialState: SettingsState = {
  language: 'en',
};

export const settingsReducer = createSlice({
  name: 'settings',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSetting: (state, action: PayloadAction<SettingValue>) => {
      state[action.payload.name] = action.payload.value;
    }
  },
});

export const { setSetting } = settingsReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectLanguage = (state: RootState) => state.settings.language;

export default settingsReducer.reducer;