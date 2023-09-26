import { useCallback } from 'react';

import { UseBottomSheetHandlers } from '../CurrenciesBottomSheet.types';

export const useBottomSheetHandlers: UseBottomSheetHandlers = (
  sheetRef,
  setIsExpanded,
  isKeyboardVisible,
) => {
  const onPressHandler = useCallback(() => {
    sheetRef.current?.snapToIndex(2);
    setIsExpanded(true);
  }, [setIsExpanded, sheetRef]);

  const onChangeHandler = useCallback(
    (index: number) => {
      if (index === 0 && !isKeyboardVisible) {
        sheetRef.current?.snapToIndex(1);
        setIsExpanded(false);
      }
      if (index === 1 && !isKeyboardVisible) {
        setIsExpanded(false);
      }
      if (index === (0 || 1) && isKeyboardVisible) {
        sheetRef.current?.snapToIndex(0);
        setIsExpanded(false);
      }
      if (index === 0 && isKeyboardVisible) {
        setIsExpanded(false);
      }
      if (index === 2) {
        setIsExpanded(true);
      }
    },
    [isKeyboardVisible, setIsExpanded, sheetRef],
  );

  return {
    onPressHandler,
    onChangeHandler,
  };
};
