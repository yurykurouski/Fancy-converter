import React, { useMemo, useState } from 'react';
import { Animated, Pressable, View } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { CurrencySelectorValueMap } from 'components';

import { BottomSheetBackground } from './BottomSheetBackground';
import {
  useBottomSheetHandlers,
  useKeyboardHandlers,
} from './CurrenciesBottomSheet.hooks';
import { Props } from './CurrenciesBottomSheet.types';

import { useStyles } from './CurrenciesBottomSheet.styles';

const snapPoints = [30, 70, '100%'];

export const CurrenciesBottomSheet = React.memo<Props>(
  ({ sheetRef, selectedCurrencies }) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const styles = useStyles();

    const { onPressHandler, onChangeHandler } = useBottomSheetHandlers(
      sheetRef,
      setIsExpanded,
      isKeyboardVisible,
    );

    useKeyboardHandlers(
      isExpanded,
      sheetRef,
      setIsExpanded,
      setKeyboardVisible,
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initialIndex = useMemo(() => (selectedCurrencies.length ? 0 : 2), []);

    const renderHandle = () => (
      <Animated.View style={[styles.handleContainer]}>
        <Pressable style={styles.handlePressable} onPress={onPressHandler}>
          <View style={styles.handle} />
        </Pressable>
      </Animated.View>
    );

    return (
      <BottomSheet
        index={initialIndex}
        snapPoints={snapPoints}
        ref={sheetRef}
        handleComponent={renderHandle}
        backgroundComponent={BottomSheetBackground}
        onChange={onChangeHandler}>
        <BottomSheetScrollView
          style={styles.listContainer}
          keyboardShouldPersistTaps="handled">
          <CurrencySelectorValueMap isExpanded={isExpanded} />
        </BottomSheetScrollView>
      </BottomSheet>
    );
  },
);
