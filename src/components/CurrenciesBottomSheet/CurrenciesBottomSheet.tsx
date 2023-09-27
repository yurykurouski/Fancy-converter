import React, { useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { THEME_COLORS } from 'assets/colors';
import { useSetSelectedCurrencies } from 'hooks';
import currencies from 'resources/avaliable-currencies';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { isIos } from 'utils';

import { BottomSheetFooterComponent } from './components/BottomSheetFooterComponent/BottomSheetFooterComponent';
import { SearchField } from './components/SearchField';
import { BottomSheetBackground } from './BottomSheetBackground';
import { Props } from './CurrenciesBottomSheet.types';
import { getSnapPoints } from './CurrenciesBottomSheet.utils';
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

    const { bottom, top } = useSafeAreaInsets();
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

    const handleScroll = useHandleScroll(bottom);

    //*to prevent rerendering bottomsheet when selectedCurrencies changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initialIndex = useMemo(() => (selectedCurrencies.length ? 1 : 2), []);

    if (!isExpanded) {
      isDrawerOpened
        ? sheetRef.current?.close()
        : sheetRef.current?.snapToIndex(1);
    }

    const renderHandle = useRenderHandler(onPressHandler);

    const renderItem = useRenderListItem({
      availableCurrencies,
      selectedCurrencies,
      setSelectedCurrencies,
      isExpanded,
    });

    const snapPoints = useMemo(() => getSnapPoints(bottom, top), [bottom, top]);
    //TODO: use SectionList here
    return (
      <>
        <BottomSheet
          index={initialIndex}
          snapPoints={snapPoints}
          ref={sheetRef}
          handleComponent={renderHandle}
          backgroundComponent={BottomSheetBackground}
          backgroundStyle={styles.backgroundStyle}
          onChange={onChangeHandler}
          containerStyle={{ marginBottom: bottom }}
          android_keyboardInputMode="adjustResize"
          keyboardBehavior={isIos ? 'extend' : 'interactive'}>
          {isCalculatingValue && (
            <View style={styles.activityIndicatorContainer}>
              <ActivityIndicator
                color={THEME_COLORS[colorScheme!]?.ACCENT_COLOR_LIGHTER}
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
            ListFooterComponent={BottomSheetFooterComponent}
            overScrollMode="always"
          />
          <SearchField
            setAvailableCurrencies={setAvailableCurrencies}
            setIsCalculatingValue={setIsCalculatingValue}
          />
        </BottomSheet>
      </>
    );
  },
);
