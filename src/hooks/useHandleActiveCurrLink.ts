import { useCallback } from 'react';
import { TAvailableCurrenciesNames, TUseHandleDeepLinkProps } from 'types';

export const useHandleActiveCurrLink = (
  currencies: TUseHandleDeepLinkProps['currencies'],
  inputsRefs: TUseHandleDeepLinkProps['inputsRefs'],
) =>
  useCallback(
    (value: string | null) => {
      if (value) {
        for (let param of value.split('/')) {
          if (param.includes('selectedCurrency')) {
            const currName = param.split('=')[1] as TAvailableCurrenciesNames;

            if (currencies[currName] !== undefined) {
              const ref = inputsRefs.current[currName];
              ref?.current?.focus();
            }
          }
        }
      }
    },
    [currencies, inputsRefs],
  );
