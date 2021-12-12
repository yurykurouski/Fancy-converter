import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { CurrencySelectorValueMap } from 'components';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Animated, BackHandler, Keyboard, Pressable, View } from 'react-native';
import { SelectedCurrencies } from 'types/avaliable-currencies';

import { styles } from './CurrenciesBottomSheet.styles';

type Props = {
  sheetRef: React.MutableRefObject<BottomSheetMethods>;
  selectedCurrencies: SelectedCurrencies;
};

const animation = new Animated.Value(60);

const shrinkHandle = () =>
  Animated.timing(animation, {
    toValue: 30,
    duration: 100,
    useNativeDriver: false,
  }).start();

const expandHandle = () =>
  Animated.timing(animation, {
    toValue: 60,
    duration: 100,
    useNativeDriver: false,
  }).start();

const snapPoints = [30, 60, '100%'];

export const CurrenciesBottomSheet = React.memo<Props>(
  ({ sheetRef, selectedCurrencies }) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const onPressHandler = useCallback(() => {
      sheetRef.current.snapToIndex(2);
      setIsExpanded(true);
    }, [setIsExpanded, sheetRef]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initialIndex = useMemo(() => (selectedCurrencies.length ? 0 : 2), []);

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

      const showKeyboardListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          shrinkHandle();
          sheetRef.current?.snapToIndex(0);
          setKeyboardVisible(true);
        },
      );

      const hideKeyboardListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          if (!isExpanded) {
            expandHandle();
            sheetRef.current?.snapToIndex(1);
          }
          setKeyboardVisible(false);
        },
      );

      return () => {
        showKeyboardListener.remove();
        hideKeyboardListener.remove();
        backHandler.remove();
      };
    }, [isExpanded, isKeyboardVisible, sheetRef]);

    const handleChange = useCallback(
      index => {
        if (index === 0 && !isKeyboardVisible) {
          sheetRef.current?.snapToIndex(1);
          setIsExpanded(false);
        }
        if (index === 2 && !isKeyboardVisible) {
          shrinkHandle();
        }
        if (index == 1 && !isKeyboardVisible) {
          expandHandle();
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
      [isKeyboardVisible, sheetRef],
    );

    const renderHandle = () => (
      <Animated.View style={[styles.handleContainer, { height: animation }]}>
        <Pressable style={styles.handlePressable} onPress={onPressHandler}>
          <View style={styles.handle} />
        </Pressable>
      </Animated.View>
    );

    return (
      <BottomSheet
        index={initialIndex}
        backgroundStyle={styles.bottomSheet}
        topInset={isKeyboardVisible ? 0 : 68}
        snapPoints={snapPoints}
        ref={sheetRef}
        handleComponent={renderHandle}
        onChange={handleChange}>
        <BottomSheetScrollView
          style={styles.listContainer}
          keyboardShouldPersistTaps="handled">
          <CurrencySelectorValueMap />
        </BottomSheetScrollView>
      </BottomSheet>
    );
  },
);
