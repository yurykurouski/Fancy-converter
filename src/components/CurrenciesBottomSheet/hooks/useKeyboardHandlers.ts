import { useEffect } from 'react';
import { BackHandler, Keyboard } from 'react-native';

import { UseKeyboardHandlers } from '../CurrenciesBottomSheet.types';

export const useKeyboardHandlers: UseKeyboardHandlers = (
  isExpanded,
  sheetRef,
  setIsExpanded,
  setKeyboardVisible,
) =>
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isExpanded) {
          sheetRef.current.snapToIndex(0);
          setIsExpanded(false);
          return true;
        }
        return false;
      },
    );

    const showKeyboardListener = Keyboard.addListener('keyboardDidShow', () => {
      if (!isExpanded) {
        sheetRef.current?.snapToIndex(0);
        setKeyboardVisible(true);
      }
    });

    const hideKeyboardListener = Keyboard.addListener('keyboardDidHide', () => {
      if (!isExpanded) {
        sheetRef.current?.snapToIndex(1);
      }
      setKeyboardVisible(false);
    });

    return () => {
      showKeyboardListener.remove();
      hideKeyboardListener.remove();
      backHandler.remove();
    };
  }, [isExpanded, setIsExpanded, setKeyboardVisible, sheetRef]);
