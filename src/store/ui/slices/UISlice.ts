import { ColorSchemeName } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExchangeCourseSliceActions } from 'store/exchangeCourses/slices/ExchangeCourseSlice';
import { FavoriteCurrenciesSliceActions } from 'store/favoriteCurrencies/slices/FavoriteCurrenciesSlice';
import {
  EColorSchemeBehavior,
  ENotificationType,
  TNotificationData,
} from 'types';
import { getCurrentColorTheme } from 'utils';

export type TUISlice = {
  isDrawerOpened: boolean;
  notificationData: TNotificationData | null;
  colorScheme: ColorSchemeName;
  behavior: EColorSchemeBehavior;
};

const initialState: TUISlice = {
  isDrawerOpened: false,
  notificationData: null,
  colorScheme: getCurrentColorTheme(),
  behavior: EColorSchemeBehavior.AUTO,
};

export const UISlice = createSlice({
  name: 'UIStatus',
  initialState,
  reducers: {
    setDrawerOpenedState: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpened = action.payload;
    },

    setNotificationData: (state, action: PayloadAction<TNotificationData>) => {
      state.notificationData = action.payload;
    },

    switchColorScheme: state => {
      state.colorScheme = state.colorScheme === 'light' ? 'dark' : 'light';

      if (state.behavior === EColorSchemeBehavior.AUTO) {
        state.behavior = EColorSchemeBehavior.MANUAL;
      }
    },

    switchAppearanceBehavior: state => {
      state.behavior =
        state.behavior === EColorSchemeBehavior.AUTO
          ? EColorSchemeBehavior.MANUAL
          : EColorSchemeBehavior.AUTO;

      if (state.behavior === EColorSchemeBehavior.AUTO) {
        state.colorScheme = getCurrentColorTheme();
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        FavoriteCurrenciesSliceActions.setFavoriteCurrency,
        (state, action) => {
          state.notificationData = {
            type: ENotificationType.ADD_FAVORITE,
            timeStamp: Date.now(),
            data: action.payload.currencyName,
          };
        },
      )
      .addCase(
        FavoriteCurrenciesSliceActions.removeFavoriteCurrency,
        (state, action) => {
          state.notificationData = {
            type: ENotificationType.REMOVE_FAVORITE,
            timeStamp: Date.now(),
            data: action.payload,
          };
        },
      )
      .addCase(ExchangeCourseSliceActions.setExchangeCourses, state => {
        state.notificationData = {
          type: ENotificationType.RATES_UPDATED,
          timeStamp: Date.now(),
          data: null,
        };
      });
  },
});

export const { actions: UISliceActions } = UISlice;
