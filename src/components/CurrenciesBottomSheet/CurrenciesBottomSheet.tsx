import React, { useMemo, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { CurrencySelectorValue } from 'components/CurrencySelectorValue';
import { currencies } from 'resources/avaliable-currencies.json';

import { BottomSheetBackground } from './BottomSheetBackground';
import { OFFSET, SNAP_POINTS } from './CurrenciesBottomSheet.consts';
import {
  useBottomSheetHandlers,
  useHandleScroll,
  useKeyboardHandlers,
} from './CurrenciesBottomSheet.hooks';
import { Props } from './CurrenciesBottomSheet.types';
import { SearchField } from './SearchField';

import { useStyles } from './CurrenciesBottomSheet.styles';

const CurrenciesBottomSheet = React.memo<Props>(
  ({ selectedCurrencies, setSelectedCurrencies }) => {
    const [avaliableCurrencies, setAvaliableCurrencies] = useState(
      () => currencies,
    );
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const sheetRef = useRef<BottomSheet>(null);

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

    const handleScroll = useHandleScroll();

    //*to prevent rerendering bottomsheet when selectedCurrencies changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initialIndex = useMemo(() => (selectedCurrencies.length ? 0 : 2), []);

    const renderHandle = () => (
      <View style={styles.handleContainer}>
        <Pressable style={styles.handlePressable} onPress={onPressHandler}>
          <View style={styles.handle} />
        </Pressable>
      </View>
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
          /* @ts-expect-error because BottomSheetFlatList doesn't have type for onScroll prop*/
          onScroll={handleScroll}
          style={styles.listContainer}
          data={avaliableCurrencies}
          renderItem={renderItem}
          keyExtractor={item => item}
          removeClippedSubviews={false}
        />
        <SearchField
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setAvaliableCurrencies={setAvaliableCurrencies}
          offset={OFFSET.offset}
        />
      </BottomSheet>
    );
  },
);

export default CurrenciesBottomSheet;
