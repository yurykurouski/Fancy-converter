import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { CurrencySelectorValueMap } from 'components';
import React, { useCallback, useEffect, useState } from 'react';
import { Animated, BackHandler, Keyboard, Pressable, View } from 'react-native';

import { styles } from './CurrenciesBottomSheet.styles';

type Props = {
  sheetRef: React.MutableRefObject<BottomSheetMethods>;
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

export const CurrenciesBottomSheet = React.memo<Props>(({ sheetRef }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const snapPoints = [30, 60, '100%'];

  const onPressHandler = useCallback(() => {
    sheetRef.current.snapToIndex(2);
    setIsExpanded(true);
  }, [sheetRef]);

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
      shrinkHandle();
      sheetRef.current?.snapToIndex(0);
      setKeyboardVisible(true);
    });

    return () => {
      showKeyboardListener.remove();
      backHandler.remove();
    };
  }, [isExpanded, isKeyboardVisible, sheetRef]);

  const handleChange = useCallback(
    index => {
      if (index === 0 && !isKeyboardVisible) {
        sheetRef.current?.snapToIndex(1);
      }
      if (index === (0 || 1) && isKeyboardVisible) {
        sheetRef.current?.snapToIndex(0);
      }
      if (index === 2 && !isKeyboardVisible) {
        shrinkHandle();
      }
      if (index == 1 && !isKeyboardVisible) {
        expandHandle();
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
      index={0}
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
});
