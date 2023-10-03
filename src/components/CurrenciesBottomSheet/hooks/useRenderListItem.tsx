import React, { useCallback } from 'react';
import { CurrencySelectorValue } from 'components/CurrencySelectorValue';

import { UseRenderListItem } from '../CurrenciesBottomSheet.types';

export const useRenderListItem: UseRenderListItem = ({
  selectedCurrencies,
  setSelectedCurrencies,
  isExpanded,
}) =>
  useCallback(
    ({ item }) => (
      <CurrencySelectorValue
        currencyCode={item}
        modalSelectedCurrencies={selectedCurrencies}
        setModalSelectedCurrencies={setSelectedCurrencies}
        isExpanded={isExpanded}
      />
    ),
    [isExpanded, selectedCurrencies, setSelectedCurrencies],
  );
