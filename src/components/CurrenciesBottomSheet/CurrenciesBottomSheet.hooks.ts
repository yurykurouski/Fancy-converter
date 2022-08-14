import { useCallback, useEffect } from 'react';
import {
  BackHandler,
  Keyboard,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import {
  DIRECTIONS_DOWN,
  DIRECTIONS_UP,
  OFFSET,
} from './CurrenciesBottomSheet.consts';
import {
  UseBottomSheetHandlers,
  UseKeyboardHandlers,
} from './CurrenciesBottomSheet.types';
import { handleScrollDirectionChange } from './CurrenciesBottomSheet.utils';

export const useBottomSheetHandlers: UseBottomSheetHandlers = (
  sheetRef,
  setIsExpanded,
  isKeyboardVisible,
) => {
  const onPressHandler = useCallback(() => {
    sheetRef.current.snapToIndex(2);
    setIsExpanded(true);
  }, [setIsExpanded, sheetRef]);

  const onChangeHandler = useCallback(
    index => {
      if (index === 0 && !isKeyboardVisible) {
        sheetRef.current?.snapToIndex(1);
        setIsExpanded(false);
      }
      if (index == 1 && !isKeyboardVisible) {
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

export const useHandleScroll = () =>
  useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const dif = currentOffset - OFFSET.offset;

    if (Math.abs(dif) < 25) return;

    const direction = dif > 0 ? DIRECTIONS_DOWN : DIRECTIONS_UP;
    OFFSET.offset = currentOffset;

    if (direction === OFFSET.direction) return;

    OFFSET.direction = dif > 0 ? DIRECTIONS_DOWN : DIRECTIONS_UP;

    handleScrollDirectionChange(OFFSET.direction);
  }, []);
