import React, { useCallback } from 'react';
import { CurrencySelectorValue } from 'components/CurrencySelectorValue';

import { UseRenderListItem } from '../CurrenciesBottomSheet.types';

export const useRenderListItem: UseRenderListItem = () =>
  useCallback(({ item }) => <CurrencySelectorValue currencyCode={item} />, []);
