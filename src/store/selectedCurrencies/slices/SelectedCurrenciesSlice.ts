import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import availableCurrencies from 'resources/avaliable-currencies';
import { UISliceActions } from 'store/ui/slices/UISlice';
import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
  ECurrencyType,
  TAvailableCurrencies,
} from 'types';

export type TSelectedCurrenciesSlice = {
  currencies: { [key in EAvailableFiatNames | EAvailableCryptoNames]?: string };
  selectedCurrenciesInEdit: {
    [key in EAvailableFiatNames | EAvailableCryptoNames]?: number;
  };
  selectedInEditAmount: number;
  searchValue: string;
  activeCurrencyType: ECurrencyType;
  filteredCurrencies: TAvailableCurrencies;
};

const initialState: TSelectedCurrenciesSlice = {
  currencies: {},
  selectedCurrenciesInEdit: {},
  selectedInEditAmount: 0,
  searchValue: '',
  activeCurrencyType: ECurrencyType.FIAT,
  filteredCurrencies: availableCurrencies,
};

export const SelectedCurrenciesSlice = createSlice({
  name: 'SelectedCurrencies',
  initialState,
  reducers: {
    addSelectedCurr: (
      state,
      action: PayloadAction<EAvailableFiatNames | EAvailableCryptoNames>,
    ) => {
      state.currencies = {
        ...state.currencies,
        [action.payload]: '',
      };
    },
    removeSelectedCurr: (
      state,
      action: PayloadAction<EAvailableFiatNames | EAvailableCryptoNames>,
    ) => {
      delete state.currencies[action.payload];
    },

    addToSelectedCurrenciesInEdit: (
      state,
      action: PayloadAction<EAvailableFiatNames | EAvailableCryptoNames>,
    ) => {
      state.selectedCurrenciesInEdit[action.payload] = 1;
      state.selectedInEditAmount += 1;
    },
    removeFromSelectedCurrenciesInEdit: (
      state,
      action: PayloadAction<EAvailableFiatNames>,
    ) => {
      delete state.selectedCurrenciesInEdit[action.payload];

      state.selectedInEditAmount -= 1;
    },
    clearSelectedCurrenciesInEdit: state => {
      Object.keys(state.selectedCurrenciesInEdit).forEach(
        //@ts-expect-error
        el => delete state.currencies[el],
      );

      state.selectedCurrenciesInEdit = {};
      state.selectedInEditAmount = 0;
    },

    searchCurrenciesValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    setFilteredCurrencies: (
      state,
      action: PayloadAction<{
        type: ECurrencyType;
        value: TAvailableCurrencies[ECurrencyType];
      }>,
    ) => {
      const { type, value } = action.payload;

      //@ts-expect-error
      state.filteredCurrencies[type] = value;
    },

    setActiveCurrencyType: (state, action: PayloadAction<ECurrencyType>) => {
      state.activeCurrencyType = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(UISliceActions.setEditMode, (state, action) => {
      if (!action.payload) {
        state.selectedCurrenciesInEdit = {};
        state.selectedInEditAmount = 0;
      }
    });
  },
});

export const { actions: SelectedCurrenciesActions } = SelectedCurrenciesSlice;
