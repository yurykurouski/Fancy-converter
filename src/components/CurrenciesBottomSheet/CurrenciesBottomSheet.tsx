import React, { useEffect, useMemo, useRef } from 'react';
import { SharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
  WINDOW_WIDTH,
} from '@gorhom/bottom-sheet';
import { useWindowDimensionChange } from 'hooks';
import { editModeStore } from 'store/valtio/editModeStore/editModeStore';
import { ECurrencyType, EDimensions } from 'types';
import { isIos } from 'utils';
import { useSnapshot } from 'valtio';

import { SearchField } from './components/SearchField';
import { useBackButtonHandler } from './hooks/useBackButtonHandler';
import { useRenderBottomSheetTabList } from './hooks/useRenderBottomSheetTabList';
import { BottomSheetBackground } from './BottomSheetBackground';
import { getSnapPoints } from './CurrenciesBottomSheet.utils';
import { useBottomSheetOnPressHandler, useRenderHandler } from './hooks';

import { useStyles } from './CurrenciesBottomSheet.styles';

const TABS_DATA = [ECurrencyType.FIAT, ECurrencyType.CRYPTO];

type TProps = { headerSharedValue: SharedValue<number> };

export const CurrenciesBottomSheet = React.memo(
  React.forwardRef<BottomSheetFlatListMethods, TProps>(
    ({ headerSharedValue }, containerListRef) => {
      const sheetRef = useRef<BottomSheet>(null);

      const { bottom, top } = useSafeAreaInsets();
      const styles = useStyles();
      const windowHeight = useWindowDimensionChange(EDimensions.HEIGHT);

      const { isInEditMode } = useSnapshot(editModeStore);

      const onPressHandler = useBottomSheetOnPressHandler(sheetRef);

      const snapPoints = useMemo(
        () => getSnapPoints(bottom, top, windowHeight),
        [bottom, top, windowHeight],
      );

      const renderHandle = useRenderHandler(onPressHandler);
      const renderTabList = useRenderBottomSheetTabList(snapPoints[1] - 90);

      useBackButtonHandler(headerSharedValue, sheetRef);

      useEffect(() => {
        isInEditMode
          ? sheetRef?.current?.close()
          : sheetRef.current?.snapToIndex(0);
      }, [isInEditMode, sheetRef]);

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
            initialScrollIndex={0}
            renderItem={renderTabList}
          />
          <SearchField />
        </BottomSheet>
      );
    },
  ),
);
