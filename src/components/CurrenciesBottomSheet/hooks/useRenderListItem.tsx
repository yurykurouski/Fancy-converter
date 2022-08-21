import React, { useCallback } from 'react';
import { CurrencySelectorValue } from 'components/CurrencySelectorValue';

import { Separator } from '../components/Separator';
import { UseRenderListItem } from '../CurrenciesBottomSheet.types';
import { checkIfSeparatorIsNeeded } from '../CurrenciesBottomSheet.utils';

export const useRenderListItem: UseRenderListItem = ({
  avaliableCurrencies,
  selectedCurrencies,
  setSelectedCurrencies,
  isExpanded,
}) =>
  useCallback(
    ({ item, index }) => {
      const isSeparatorNeeded = checkIfSeparatorIsNeeded(
        item,
        index,
        avaliableCurrencies,
      );

      const separatorValue = isSeparatorNeeded && item[0];

      return (
        <>
          {isSeparatorNeeded && <Separator value={separatorValue} />}
          <CurrencySelectorValue
            currencyCode={item}
            modalSelectedCurrencies={selectedCurrencies}
            setModalSelectedCurrencies={setSelectedCurrencies}
            isExpanded={isExpanded}
          />
        </>
      );
    },
    [
      avaliableCurrencies,
      isExpanded,
      selectedCurrencies,
      setSelectedCurrencies,
    ],
  );
