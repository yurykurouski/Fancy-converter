import React, { useMemo, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import BottomSheet, { BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { useWindowDimensionChange } from 'hooks';
import { useSetSetBottomSheetStatus } from 'hooks/store/UIStatus';
import currencies from 'resources/avaliable-currencies';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { selectUIStatus } from 'store/ui/selectors';
import { EDimensions } from 'types';
import { groupByName, isIos, makeSectionsData } from 'utils';

import { BottomSheetEmpty } from './components/BottomSheetEmpty';
import { SearchField } from './components/SearchField';
import { useBackButtonHandler } from './hooks/useBackButtonHandler';
import { BottomSheetBackground } from './BottomSheetBackground';
import { getSnapPoints } from './CurrenciesBottomSheet.utils';
import {
  useBottomSheetOnPressHandler,
  useRenderHandler,
  useRenderListItem,
  useRenderSectionHeader,
} from './hooks';

import { useStyles } from './CurrenciesBottomSheet.styles';

export const CurrenciesBottomSheet = React.memo(() => {
  const [availableCurrencies, setAvailableCurrencies] = useState(currencies);

  const sheetRef = useRef<BottomSheet>(null);

  const { bottom, top } = useSafeAreaInsets();
  const styles = useStyles();
  const windowHeight = useWindowDimensionChange(EDimensions.HEIGHT);

  const { selectedCurrencies } = useSelector(selectSelectedCurrencies);
  const { bottomSheetIndex } = useSelector(selectUIStatus);
  const setBSStatus = useSetSetBottomSheetStatus();

  const onPressHandler = useBottomSheetOnPressHandler(sheetRef);

  //*to prevent rerendering bottomsheet when selectedCurrencies changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialIndex = useMemo(() => (selectedCurrencies.length ? 0 : 1), []);

  const renderHandle = useRenderHandler(onPressHandler);
  const renderSectionHeader = useRenderSectionHeader();
  const renderItem = useRenderListItem();

  useBackButtonHandler(bottomSheetIndex, sheetRef);

  const groupedData = useMemo(
    () => groupByName(availableCurrencies),
    [availableCurrencies],
  );
  const sectionsData = useMemo(
    () => makeSectionsData(groupedData),
    [groupedData],
  );

  const snapPoints = useMemo(
    () => getSnapPoints(bottom, top, windowHeight),
    [bottom, top, windowHeight],
  );

  return (
    <BottomSheet
      index={initialIndex}
      snapPoints={snapPoints}
      ref={sheetRef}
      handleHeight={10}
      topInset={top + (isIos ? 40 : -4)}
      handleComponent={renderHandle}
      backgroundComponent={BottomSheetBackground}
      backgroundStyle={styles.backgroundStyle}
      containerStyle={styles.containerStyle}
      keyboardBehavior="extend"
      onChange={setBSStatus}
      animateOnMount={false}>
      <BottomSheetSectionList
        style={styles.listContainer}
        sections={sectionsData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item}
        removeClippedSubviews={false}
        ListEmptyComponent={BottomSheetEmpty}
        overScrollMode="always"
        stickySectionHeadersEnabled
        getItemLayout={(data, index) => ({
          length: 76,
          offset: 76 * index,
          index,
        })}
      />
      <SearchField setAvailableCurrencies={setAvailableCurrencies} />
    </BottomSheet>
  );
});
