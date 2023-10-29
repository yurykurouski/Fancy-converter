import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FavoriteCurrenciesSlice } from 'store/favoriteCurrencies/slices/FavoriteCurrenciesSlice';
import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
  ECurrencyType,
} from 'types';

export const useSetFavoriteCurrency = () => {
  const dispatch = useDispatch();

  return useCallback(
    (
      currencyName: EAvailableFiatNames | EAvailableCryptoNames,
      currencyType: ECurrencyType,
    ) =>
      dispatch(
        FavoriteCurrenciesSlice.actions.setFavoriteCurrency({
          currencyName,
          currencyType,
        }),
      ),
    [dispatch],
  );
};
