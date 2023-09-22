import React, { useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { THEME_COLORS } from 'assets/colors';
import { useSetSelectedCurrencies } from 'hooks';
import { currencies } from 'resources/avaliable-currencies.json';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { SearchField } from './components/SearchField';
import { BottomSheetBackground } from './BottomSheetBackground';
import { SNAP_POINTS } from './CurrenciesBottomSheet.consts';
import { Props } from './CurrenciesBottomSheet.types';
import {
  useBottomSheetHandlers,
  useHandleScroll,
  useKeyboardHandlers,
  useRenderHandler,
  useRenderListItem,
} from './hooks';

import { useStyles } from './CurrenciesBottomSheet.styles';

export const CurrenciesBottomSheet = React.memo<Props>(
  ({ selectedCurrencies, isDrawerOpened }) => {
    const [availableCurrencies, setAvailableCurrencies] = useState(currencies);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isCalculatingValue, setIsCalculatingValue] = useState(false);

    const sheetRef = useRef<BottomSheet>(null);
    const styles = useStyles();
    const { colorScheme } = useSelector(selectColorSchemeState);

    const setSelectedCurrencies = useSetSelectedCurrencies();

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

    if (!isExpanded) {
      isDrawerOpened
        ? sheetRef.current?.close()
        : sheetRef.current?.snapToIndex(0);
    }

    const renderHandle = useRenderHandler(onPressHandler);

    const renderItem = useRenderListItem({
      availableCurrencies,
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
        backgroundStyle={styles.backgroundStyle}
        onChange={onChangeHandler}>
        {isCalculatingValue && (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator
              color={THEME_COLORS[colorScheme].ACCENT_COLOR_LIGHTER}
            />
          </View>
        )}
        <BottomSheetFlatList
          // @ts-expect-error poor typization from library
          onScroll={handleScroll}
          style={styles.listContainer}
          data={availableCurrencies}
          renderItem={renderItem}
          keyExtractor={item => item}
          removeClippedSubviews={false}
          ListEmptyComponent={
            <View style={styles.searchEmptyStateContainer}>
              <Text style={styles.searchEmptyStatetext}>
                {l['currencies-bootomsheet_empty-search-result']}
              </Text>
            </View>
          }
        />
        <SearchField
          setAvailableCurrencies={setAvailableCurrencies}
          setIsCalculatingValue={setIsCalculatingValue}
        />
      </BottomSheet>
    );
  },
);
