import { ColorSchemeName } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExchangeCourseSliceActions } from 'store/exchangeCourses/slices/ExchangeCourseSlice';
import { FavoriteCurrenciesSliceActions } from 'store/favoriteCurrencies/slices/FavoriteCurrenciesSlice';
import { SelectedCurrenciesActions } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import {
  EColorSchemeBehavior,
  ENotificationType,
  TNotificationData,
} from 'types';
import { getCurrentColorTheme } from 'utils';

export type TUISlice = {
  isDrawerOpened: boolean;
  bottomSheetIndex: number;
  notificationData: TNotificationData | null;
  colorScheme: ColorSchemeName;
  behavior: EColorSchemeBehavior;
  isInEditMode: boolean;
};

const initialState: TUISlice = {
  isDrawerOpened: false,
  bottomSheetIndex: 0,
  notificationData: null,
  colorScheme: getCurrentColorTheme(),
  behavior: EColorSchemeBehavior.AUTO,
  isInEditMode: false,
};

export const UISlice = createSlice({
  name: 'UIStatus',
  initialState,
  reducers: {
    setDrawerOpenedState: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpened = action.payload;
    },

    setBottomSheetState: (state, action: PayloadAction<number>) => {
      state.bottomSheetIndex = action.payload;
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

    setEditMode: (state, action: PayloadAction<boolean>) => {
      state.isInEditMode = action.payload;
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
      })
      .addCase(
        SelectedCurrenciesActions.addToSelectedCurrenciesInEdit,
        state => {
          if (!state.isInEditMode) {
            state.isInEditMode = true;
          }
        },
      )
      .addCase(
        SelectedCurrenciesActions.clearSelectedCurrenciesInEdit,
        state => {
          state.isInEditMode = false;
        },
      );
  },
});

export const { actions: UISliceActions } = UISlice;
