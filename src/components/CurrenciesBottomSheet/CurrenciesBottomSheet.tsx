import React, { useMemo, useRef, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import BottomSheet, { BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { THEME_COLORS } from 'assets/colors';
import { useSetSelectedCurrencies } from 'hooks';
import currencies from 'resources/avaliable-currencies';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectDrawerOpenStatus } from 'store/drawer/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { groupByName, isIos, makeSectionsData } from 'utils';

import { BottomSheetEmpty } from './components/BottomSheetEmpty';
import { BottomSheetFooterComponent } from './components/BottomSheetFooterComponent/BottomSheetFooterComponent';
import { SearchField } from './components/SearchField';
import { BottomSheetBackground } from './BottomSheetBackground';
import { SectionTitle } from './components';
import { getSnapPoints } from './CurrenciesBottomSheet.utils';
import {
  useBottomSheetHandlers,
  useKeyboardHandlers,
  useRenderHandler,
  useRenderListItem,
} from './hooks';

import { useStyles } from './CurrenciesBottomSheet.styles';

export const CurrenciesBottomSheet = React.memo(() => {
  const [availableCurrencies, setAvailableCurrencies] = useState(currencies);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCalculatingValue, setIsCalculatingValue] = useState(false);

  const sheetRef = useRef<BottomSheet>(null);

  const { bottom, top } = useSafeAreaInsets();
  const styles = useStyles();

  const { colorScheme } = useSelector(selectColorSchemeState);
  const { isDrawerOpened } = useSelector(selectDrawerOpenStatus);
  const { selectedCurrencies } = useSelector(selectSelectedCurrencies);

  const setSelectedCurrencies = useSetSelectedCurrencies();

  const { onPressHandler, onChangeHandler } = useBottomSheetHandlers(
    sheetRef,
    setIsExpanded,
    isKeyboardVisible,
  );

  useKeyboardHandlers(isExpanded, sheetRef, setIsExpanded, setKeyboardVisible);

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

  const groupedData = useMemo(
    () => groupByName(availableCurrencies),
    [availableCurrencies],
  );
  const sectionsData = useMemo(
    () => makeSectionsData(groupedData),
    [groupedData],
  );

  const snapPoints = useMemo(() => getSnapPoints(bottom, top), [bottom, top]);

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
        containerStyle={styles.containerStyle}
        android_keyboardInputMode="adjustResize"
        keyboardBehavior={isIos ? 'extend' : 'interactive'}>
        {isCalculatingValue && (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator
              color={THEME_COLORS[colorScheme!]?.ACCENT_COLOR_LIGHTER}
            />
          </View>
        )}
        <BottomSheetSectionList
          style={styles.listContainer}
          sections={sectionsData}
          renderItem={renderItem}
          renderSectionHeader={({ section }) => (
            <SectionTitle value={section.title} />
          )}
          keyExtractor={item => item}
          removeClippedSubviews={false}
          ListEmptyComponent={BottomSheetEmpty}
          ListFooterComponent={BottomSheetFooterComponent}
          overScrollMode="always"
          stickySectionHeadersEnabled
        />
        <SearchField
          setAvailableCurrencies={setAvailableCurrencies}
          setIsCalculatingValue={setIsCalculatingValue}
        />
      </BottomSheet>
    </>
  );
});
