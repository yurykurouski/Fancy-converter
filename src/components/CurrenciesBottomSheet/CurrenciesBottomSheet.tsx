import React, { useState } from 'react';
import { Animated, Pressable, View } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { CurrencySelectorValue } from 'components/CurrencySelectorValue';
import { currencies } from 'resources/avaliable-currencies.json';

import { BottomSheetBackground } from './BottomSheetBackground';
import {
  useBottomSheetHandlers,
  useKeyboardHandlers,
} from './CurrenciesBottomSheet.hooks';
import { Props } from './CurrenciesBottomSheet.types';
import { SearchField } from './SearchField';

import { useStyles } from './CurrenciesBottomSheet.styles';

const SNAP_POINTS = [30, 70, '100%'];

const CurrenciesBottomSheet = React.memo<Props>(
  ({ sheetRef, selectedCurrencies, setSelectedCurrencies }) => {
    const [avaliableCurrencies, setAvaliableCurrencies] = useState(
      () => currencies,
    );
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
    const initialIndex = selectedCurrencies.length ? 0 : 2;

    const renderHandle = () => (
      <Animated.View style={[styles.handleContainer]}>
        <Pressable style={styles.handlePressable} onPress={onPressHandler}>
          <View style={styles.handle} />
        </Pressable>
      </Animated.View>
    );

    const renderItem = ({ item }: { item: string }) => (
      <CurrencySelectorValue
        currencyCode={item}
        modalSelectedCurrencies={selectedCurrencies}
        setModalSelectedCurrencies={setSelectedCurrencies}
        isExpanded={isExpanded}
      />
    );

    return (
      <BottomSheet
        index={initialIndex}
        snapPoints={SNAP_POINTS}
        ref={sheetRef}
        handleComponent={renderHandle}
        backgroundComponent={BottomSheetBackground}
        onChange={onChangeHandler}>
        <BottomSheetFlatList
          style={styles.listContainer}
          data={avaliableCurrencies}
          renderItem={renderItem}
          keyExtractor={item => item}
          removeClippedSubviews={false}
        />
        <SearchField setAvaliableCurrencies={setAvaliableCurrencies} />
      </BottomSheet>
    );
  },
);

export default CurrenciesBottomSheet;
