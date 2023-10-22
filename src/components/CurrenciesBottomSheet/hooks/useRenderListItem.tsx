import React, { useCallback } from 'react';
import { CurrencySelectorValue } from 'components/CurrencySelectorValue';

import { TUseRenderListItem } from '../CurrenciesBottomSheet.types';

export const useRenderListItem: TUseRenderListItem = () =>
  useCallback(item => <CurrencySelectorValue currencyCode={item} />, []);
