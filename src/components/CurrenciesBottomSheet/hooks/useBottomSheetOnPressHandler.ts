import { useCallback } from 'react';

import { TUseBottomSheetOnPressHandler } from '../CurrenciesBottomSheet.types';

export const useBottomSheetOnPressHandler: TUseBottomSheetOnPressHandler =
  sheetRef =>
    useCallback(() => {
      sheetRef.current?.expand();
    }, [sheetRef]);
