import React, { useCallback } from 'react';
import { SectionListRenderItem } from 'react-native';
import { CurrencySelectorValue } from 'components/CurrencySelectorValue';
import { TAvailableCurrenciesNames } from 'types';

import { TSectionData } from '../CurrenciesBottomSheet.types';

export const useRenderListItem = (): SectionListRenderItem<
  TAvailableCurrenciesNames,
  TSectionData
> =>
  useCallback(({ item }) => <CurrencySelectorValue currencyCode={item} />, []);
