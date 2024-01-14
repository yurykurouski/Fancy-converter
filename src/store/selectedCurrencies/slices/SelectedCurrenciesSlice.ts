import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialCurrencies } from 'constants/index';
import availableCurrencies from 'resources/avaliable-currencies';
import {
  addToSelected,
  deleteSomeSelected,
  removeFromSelected,
} from 'services/widget-service';
import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
  ECurrencyType,
  TAvailableCurrencies,
  TAvailableCurrenciesNames,
} from 'types';

export type TSelectedCurrenciesSlice = {
  currencies: { [key in EAvailableFiatNames | EAvailableCryptoNames]?: string };
  searchValue: string;
  activeCurrencyType: ECurrencyType;
  filteredCurrencies: TAvailableCurrencies;
};

const initialState: TSelectedCurrenciesSlice = {
  currencies: initialCurrencies,
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

      addToSelected(action.payload);
    },
    removeSelectedCurr: (
      state,
      action: PayloadAction<EAvailableFiatNames | EAvailableCryptoNames>,
    ) => {
      delete state.currencies[action.payload];

      removeFromSelected(action.payload);
    },

    deleteAllSelected: (state, action) => {
      const curs = Object.keys(action.payload) as [TAvailableCurrenciesNames];

      curs.forEach(el => delete state.currencies[el]);

      deleteSomeSelected(curs.join(','));
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
});

export const { actions: SelectedCurrenciesActions } = SelectedCurrenciesSlice;
