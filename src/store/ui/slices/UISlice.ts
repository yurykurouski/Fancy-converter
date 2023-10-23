import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExchangeCourseSliceActions } from 'store/exchangeCourses/slices/ExchangeCourseSlice';
import { FavoriteCurrenciesSliceActions } from 'store/favoriteCurrencies/slices/FavoriteCurrenciesSlice';
import { ENotificationType, TNotificationData } from 'types';

export type TUISlice = {
  isDrawerOpened: boolean;
  bottomSheetIndex: number;
  notificationData: TNotificationData | null;
};

const initialState: TUISlice = {
  isDrawerOpened: false,
  bottomSheetIndex: 0,
  notificationData: null,
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
