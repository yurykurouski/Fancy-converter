import { useEffect } from 'react';
import { BackHandler } from 'react-native';

import { TUseBackButtonHandler } from '../CurrenciesBottomSheet.types';

export const useBackButtonHandler: TUseBackButtonHandler = (
  bottomSheetIndex,
  sheetRef,
) =>
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (bottomSheetIndex.value) {
          sheetRef.current?.snapToIndex(0);
          return true;
        }
        return false;
      },
    );

    return () => {
      backHandler.remove();
    };
  }, [bottomSheetIndex, sheetRef]);
