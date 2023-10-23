import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FavoriteCurrenciesSlice } from 'store/favoriteCurrencies/slices/FavoriteCurrenciesSlice';
import { AvailableCryptoNames, AvailableFiatNames, ECurrencyType } from 'types';

export const useSetFavoriteCurrency = () => {
  const dispatch = useDispatch();

  return useCallback(
    (
      currencyName: AvailableFiatNames | AvailableCryptoNames,
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
