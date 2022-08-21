import React, { useMemo, useRef, useState } from 'react';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { currencies } from 'resources/avaliable-currencies.json';

import { SearchField } from './components/SearchField';
import { BottomSheetBackground } from './BottomSheetBackground';
import { OFFSET, SNAP_POINTS } from './CurrenciesBottomSheet.consts';
import { Props } from './CurrenciesBottomSheet.types';
import {
  useBottomSheetHandlers,
  useHandleScroll,
  useKeyboardHandlers,
  useRenderHandler,
  useRenderListItem,
} from './hooks';

import { useStyles } from './CurrenciesBottomSheet.styles';

const CurrenciesBottomSheet = React.memo<Props>(
  ({ selectedCurrencies, setSelectedCurrencies }) => {
    const [avaliableCurrencies, setAvaliableCurrencies] = useState(currencies);
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

    const renderHandle = useRenderHandler(onPressHandler);

    const renderItem = useRenderListItem({
      avaliableCurrencies,
      selectedCurrencies,
      setSelectedCurrencies,
      isExpanded,
    });

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
