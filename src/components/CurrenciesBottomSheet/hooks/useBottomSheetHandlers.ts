import { useCallback } from 'react';

import { UseBottomSheetHandlers } from '../CurrenciesBottomSheet.types';

export const useBottomSheetHandlers: UseBottomSheetHandlers = sheetRef =>
  useCallback(() => {
    sheetRef.current?.expand();
  }, [sheetRef]);
