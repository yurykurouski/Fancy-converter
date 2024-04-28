import React, { LegacyRef, useCallback, useMemo } from 'react';
import { GestureDetector } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { FlashList, ListRenderItem, ViewToken } from '@shopify/flash-list';
import { CurrencyInputValue } from 'components';
import { AppRefreshControl } from 'components/common/AppRefreshControl';
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

import { ListFooterComponent } from './components/FooterComponent/ListFooterComponent';
import { TSortedWithFavs } from './CurrencySelector.types';
import { useLongPressSwipeGesture } from './hooks';

export const CurrencySelector = React.memo(
  React.forwardRef(
    (_, listRef: LegacyRef<FlashList<TAvailableCurrenciesNames>>) => {
      const windowHeight = useWindowDimensionChange(EDimensions.HEIGHT);
      const { top } = useSafeAreaInsets();

      const visibleItemsShared = useSharedValue<ViewToken[]>([]);
      const selectionModeShared = useSharedValue(1);
      const selectedDuringSwipeShared = useSharedValue(0);

      const { isLoading } = useSnapshot(exchangeRatesStore);
      const { currencies } = useSnapshot(selectedCurrenciesStore);
      const { favoriteCurrencies } = useSnapshot(favoriteCurrencyStore);

      const { reloadCourses } = useGetCurrenciesExchangeCourse();

      const renderItem: ListRenderItem<TAvailableCurrenciesNames> = useCallback(
        ({ item }) => <CurrencyInputValue currencyCode={item} />,
        [],
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
        selectedDuringSwipeShared,
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
            disableAutoLayout
            refreshControl={
              <AppRefreshControl
                refreshing={isLoading}
                onRefresh={reloadCourses}
              />
            }
            ListFooterComponent={renderFooter}
            drawDistance={0}
            estimatedItemSize={64}
            estimatedListSize={{ height: 64 * 9, width: WINDOW_WIDTH }}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 50,
            }}
            onViewableItemsChanged={onViewableItemsChanged}
            keyExtractor={item => item}
            decelerationRate={'normal'}
            snapToAlignment={'start'}
            snapToInterval={72}
            automaticallyAdjustKeyboardInsets
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps="handled"
          />
        </GestureDetector>
      );
    },
  ),
);
