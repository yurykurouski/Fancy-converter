import React, { useEffect, useMemo, useRef } from 'react';
import { SharedValue } from 'react-native-reanimated';
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
import { selectBottomSheetIndex, selectUIStatus } from 'store/ui/selectors';
import { ECurrencyType, EDimensions } from 'types';
import { isIos } from 'utils';

import { SearchField } from './components/SearchField';
import { useBackButtonHandler } from './hooks/useBackButtonHandler';
import { useRenderBottomSheetTabList } from './hooks/useRenderBottomSheetTabList';
import { BottomSheetBackground } from './BottomSheetBackground';
import { getSnapPoints } from './CurrenciesBottomSheet.utils';
import { useBottomSheetOnPressHandler, useRenderHandler } from './hooks';

import { useStyles } from './CurrenciesBottomSheet.styles';

const TABS_DATA = [ECurrencyType.FIAT, ECurrencyType.CRYPTO];

export const CurrenciesBottomSheet = React.memo(
  ({ headerSharedValue }: { headerSharedValue: SharedValue<number> }) => {
    const sheetRef = useRef<BottomSheet>(null);
    const containerListRef = useRef<BottomSheetFlatListMethods>(null);

    const { bottom, top } = useSafeAreaInsets();
    const styles = useStyles();
    const windowHeight = useWindowDimensionChange(EDimensions.HEIGHT);

    const { activeCurrencyType } = useSelector(selectSelectedCurrencies);
    const { isInEditMode } = useSelector(selectUIStatus);
    const bottomSheetIndex = useSelector(selectBottomSheetIndex);
    const setBSStatus = useSetSetBottomSheetStatus();

    const onPressHandler = useBottomSheetOnPressHandler(sheetRef);

    const snapPoints = useMemo(
      () => getSnapPoints(bottom, top, windowHeight),
      [bottom, top, windowHeight],
    );

    const renderHandle = useRenderHandler(onPressHandler);
    const renderTabList = useRenderBottomSheetTabList(snapPoints[1] - 90);

    useBackButtonHandler(bottomSheetIndex, sheetRef);

    useEffect(() => {
      if (activeCurrencyType === ECurrencyType.FIAT) {
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

    useEffect(() => {
      isInEditMode
        ? sheetRef?.current?.close()
        : sheetRef.current?.snapToIndex(0);
    }, [isInEditMode]);

    return (
      <BottomSheet
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
        animatedIndex={headerSharedValue}
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
          initialNumToRender={1}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          initialScrollIndex={activeCurrencyType === ECurrencyType.FIAT ? 0 : 1}
          renderItem={renderTabList}
        />
        <SearchField />
      </BottomSheet>
    );
  },
);
