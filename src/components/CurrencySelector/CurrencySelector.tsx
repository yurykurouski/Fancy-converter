import React, { LegacyRef, useCallback, useMemo } from 'react';
import { GestureDetector } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { FlashList, ListRenderItem, ViewToken } from '@shopify/flash-list';
import { CurrencyInputValue } from 'components';
import { AppRefreshControl } from 'components/common/AppRefreshControl';
import {
  BOTTOMSHEET_EL_HEIGHT,
  HEADER_HEIGHT,
  INPUT_ELEMENT_HEIGHT,
} from 'constants';
import {
  useGetCurrenciesExchangeCourse,
  useWindowDimensionChange,
} from 'hooks';
import { editModeActions } from 'store/editModeStore';
import { exchangeRatesStore } from 'store/exchangeRateStore';
import { favoriteCurrencyStore } from 'store/favoriteCurrenciesStore';
import { selectedCurrenciesStore } from 'store/selectedCurrenciesStore';
import { selectedForEditActions } from 'store/selectedForEditStore';
import { EDimensions, TAvailableCurrenciesNames } from 'types';
import { useSnapshot } from 'valtio';
import { useProxy } from 'valtio/utils';

import { ListFooterComponent } from './components/FooterComponent/ListFooterComponent';
import { ListEmptyComponent } from './components/ListEmptyComponent/ListEmptyComponent';
import { TSortedWithFavs } from './CurrencySelector.types';
import { useLongPressSwipeGesture } from './hooks';

export const CurrencySelector = React.memo(
  React.forwardRef(
    (_, listRef: LegacyRef<FlashList<TAvailableCurrenciesNames>>) => {
      const windowHeight = useWindowDimensionChange(EDimensions.HEIGHT);
      const { top } = useSafeAreaInsets();

      const selectionModeShared = useSharedValue(1);
      const selectedAmountShared = useSharedValue(0);

      const { isLoading } = useSnapshot(exchangeRatesStore);
      const { favoriteCurrencies } = useProxy(favoriteCurrencyStore);
      const { currencies } = useProxy(selectedCurrenciesStore);

      const { reloadCourses } = useGetCurrenciesExchangeCourse();

      const renderItem: ListRenderItem<TAvailableCurrenciesNames> = useCallback(
        ({ item }) => (
          <CurrencyInputValue
            currencyCode={item}
            selectedAmountShared={selectedAmountShared}
          />
        ),
        [selectedAmountShared],
      );
      const renderFooter = () =>
        sortedWithFavorites.length ? <ListFooterComponent /> : null;

      const sortedWithFavorites = useMemo(() => {
        const separated = Object.keys(currencies).reduce<TSortedWithFavs>(
          (acc, el) =>
            favoriteCurrencies[el as TAvailableCurrenciesNames]
              ? { ...acc, favs: [...acc.favs, el as TAvailableCurrenciesNames] }
              : {
                  ...acc,
                  rest: [...acc.rest, el as TAvailableCurrenciesNames],
                },
          {
            favs: [],
            rest: [],
          },
        );

        return [...separated.favs, ...separated.rest];
      }, [favoriteCurrencies, currencies]);

      const visibleItemsShared = useSharedValue<
        ViewToken[] | TAvailableCurrenciesNames[]
      >(sortedWithFavorites);

      const onViewableItemsChanged = useCallback(
        ({ viewableItems }: { viewableItems: ViewToken[] }) => {
          visibleItemsShared.value = viewableItems;
        },
        [visibleItemsShared],
      );

      const gesture = useLongPressSwipeGesture({
        top,
        windowHeight,
        visibleItemsShared,
        sortedWithFavorites,
        selectionModeShared,
        selectedDuringSwipeShared: selectedAmountShared,
        setEditMode: editModeActions.setEditMode,
        addToCurrInEdit: selectedForEditActions.addToSelected,
        removeFromSelectedCurrenciesInEdit:
          selectedForEditActions.clearSelected,
      });

      return (
        <GestureDetector gesture={gesture}>
          <FlashList
            ref={listRef}
            data={sortedWithFavorites}
            renderItem={renderItem}
            refreshControl={
              <AppRefreshControl
                refreshing={isLoading}
                onRefresh={reloadCourses}
              />
            }
            ListFooterComponent={renderFooter}
            ListEmptyComponent={ListEmptyComponent}
            estimatedItemSize={INPUT_ELEMENT_HEIGHT}
            estimatedListSize={{
              height: WINDOW_HEIGHT - HEADER_HEIGHT - BOTTOMSHEET_EL_HEIGHT,
              width: WINDOW_WIDTH,
            }}
            onViewableItemsChanged={onViewableItemsChanged}
            keyExtractor={item => item}
            decelerationRate={'normal'}
            snapToAlignment={'start'}
            snapToInterval={INPUT_ELEMENT_HEIGHT}
            automaticallyAdjustKeyboardInsets
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps="handled"
          />
        </GestureDetector>
      );
    },
  ),
);
