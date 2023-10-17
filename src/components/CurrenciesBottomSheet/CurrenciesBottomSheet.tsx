import React, { useEffect, useMemo, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
  WINDOW_WIDTH,
} from '@gorhom/bottom-sheet';
import { useWindowDimensionChange } from 'hooks';
import { useSetSetBottomSheetStatus } from 'hooks/store/UIStatus';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { selectUIStatus } from 'store/ui/selectors';
import { ECurrencyType, EDimensions } from 'types';
import { isIos } from 'utils';

import { SearchField } from './components/SearchField';
import { useBackButtonHandler } from './hooks/useBackButtonHandler';
import { useRenderBottomSheetTabList } from './hooks/useRenderBottomSheetTabList';
import { BottomSheetBackground } from './BottomSheetBackground';
import { getSnapPoints } from './CurrenciesBottomSheet.utils';
import { useBottomSheetOnPressHandler, useRenderHandler } from './hooks';

import { useStyles } from './CurrenciesBottomSheet.styles';

const TABS_DATA = [ECurrencyType.FLAT, ECurrencyType.CRYPTO];

export const CurrenciesBottomSheet = React.memo(() => {
  const sheetRef = useRef<BottomSheet>(null);
  const containerListRef = useRef<BottomSheetFlatListMethods>(null);

  const { bottom, top } = useSafeAreaInsets();
  const styles = useStyles();
  const windowHeight = useWindowDimensionChange(EDimensions.HEIGHT);

  const { activeCurrencyType } = useSelector(selectSelectedCurrencies);
  const { bottomSheetIndex } = useSelector(selectUIStatus);
  const setBSStatus = useSetSetBottomSheetStatus();

  const onPressHandler = useBottomSheetOnPressHandler(sheetRef);

  //*to prevent rerendering bottomsheet when selectedCurrencies changes

  // const initialIndex = useMemo(() => (selectedCurrencies.length ? 0 : 1), []);

  const renderHandle = useRenderHandler(onPressHandler);
  const renderTabList = useRenderBottomSheetTabList();

  useBackButtonHandler(bottomSheetIndex, sheetRef);

  const snapPoints = useMemo(
    () => getSnapPoints(bottom, top, windowHeight),
    [bottom, top, windowHeight],
  );

  useEffect(() => {
    if (activeCurrencyType === ECurrencyType.FLAT) {
      containerListRef.current?.scrollToIndex({
        index: 0,
        animated: true,
      });
    } else {
      containerListRef.current?.scrollToIndex({
        index: 1,
        animated: true,
      });
    }
  }, [activeCurrencyType]);

  return (
    <BottomSheet
      index={bottomSheetIndex}
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
      <BottomSheetFlatList
        ref={containerListRef}
        getItemLayout={(_, index) => ({
          length: WINDOW_WIDTH,
          offset: WINDOW_WIDTH * index,
          index,
        })}
        pointerEvents={'box-none'}
        data={TABS_DATA}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        initialScrollIndex={activeCurrencyType === ECurrencyType.FLAT ? 0 : 1}
        renderItem={renderTabList}
      />
      <SearchField />
    </BottomSheet>
  );
});
