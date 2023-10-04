import React, { useCallback } from 'react';
import { CurrencySelectorValue } from 'components/CurrencySelectorValue';

import { UseRenderListItem } from '../CurrenciesBottomSheet.types';

export const useRenderListItem: UseRenderListItem = ({
  selectedCurrencies,
  setSelectedCurrencies,
}) =>
  useCallback(
    ({ item }) => (
      <CurrencySelectorValue
        currencyCode={item}
        modalSelectedCurrencies={selectedCurrencies}
        setModalSelectedCurrencies={setSelectedCurrencies}
      />
    ),
    [selectedCurrencies, setSelectedCurrencies],
  );
