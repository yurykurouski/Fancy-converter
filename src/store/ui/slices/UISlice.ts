import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteCurrenciesSliceActions } from 'store/favoriteCurrencies/slices/FavoriteCurrenciesSlice';

enum ENotificationType {
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
}

export type TUISlice = {
  isDrawerOpened: boolean;
  bottomSheetIndex: number;
  notificationData: {
    type: ENotificationType;
    data: unknown;
  };
};

const initialState: TUISlice = {
  isDrawerOpened: false,
  bottomSheetIndex: 0,
  notificationData: {},
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

    setNotificationShown: (state, action: PayloadAction<boolean>) => {
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
            data: action.payload.currencyName,
          };
        },
      )
      .addCase(
        FavoriteCurrenciesSliceActions.removeFavoriteCurrency,
        (state, action) => {
          state.notificationData = {
            type: ENotificationType.REMOVE_FAVORITE,
            data: action.payload,
          };
        },
      );
  },
});

export const { actions: UISliceActions } = UISlice;
