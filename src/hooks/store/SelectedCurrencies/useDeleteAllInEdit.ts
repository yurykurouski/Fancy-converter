import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCurrenciesActions } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { EAvailableCryptoNames, EAvailableFiatNames } from 'types';

export const useDeleteAllInEdit = () => {
  const dispatch = useDispatch();

  return useCallback(
    (selectedCurrencies: {
      [key in EAvailableFiatNames | EAvailableCryptoNames]?: number;
    }) =>
      dispatch(SelectedCurrenciesActions.deleteAllSelected(selectedCurrencies)),
    [dispatch],
  );
};
