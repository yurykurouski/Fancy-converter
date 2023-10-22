import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FavoriteCurrenciesSlice } from 'store/favoriteCurrencies/slices/FavoriteCurrenciesSlice';
import { AvailableCryptoNames, AvailableFiatNames } from 'types';

export const useRemoveFavoriteCurrency = () => {
  const dispatch = useDispatch();

  return useCallback(
    (currencyName: AvailableFiatNames | AvailableCryptoNames) =>
      dispatch(
        FavoriteCurrenciesSlice.actions.removeFavoriteCurrency(currencyName),
      ),
    [dispatch],
  );
};
