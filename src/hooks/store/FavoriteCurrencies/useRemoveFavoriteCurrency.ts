import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FavoriteCurrenciesSlice } from 'store/favoriteCurrencies/slices/FavoriteCurrenciesSlice';
import { EAvailableCryptoNames, EAvailableFiatNames } from 'types';

export const useRemoveFavoriteCurrency = () => {
  const dispatch = useDispatch();

  return useCallback(
    (currencyName: EAvailableFiatNames | EAvailableCryptoNames) =>
      dispatch(
        FavoriteCurrenciesSlice.actions.removeFavoriteCurrency(currencyName),
      ),
    [dispatch],
  );
};
