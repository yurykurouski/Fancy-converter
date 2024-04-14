import React, { useCallback, useMemo, useRef } from 'react';
import { GestureDetector } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RecyclerListViewState } from 'recyclerlistview/dist/reactnative/core/RecyclerListView';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { CurrencyInputValue } from 'components';
import { AppRefreshControl } from 'components/common/AppRefreshControl';
import {
  useGetCurrenciesExchangeCourse,
  useWindowDimensionChange,
} from 'hooks';
import {
  useAddToSelectedCurrenciesInEdit,
  useRemoveFromSelectedCurrenciesInEdit,
} from 'hooks/store/SelectedCurrencies';
import { useSetEditMode } from 'hooks/store/UIStatus';
import {
  DataProvider,
  RecyclerListView,
  RecyclerListViewProps,
} from 'recyclerlistview';
import { selectFavoriteCurrencies } from 'store/favoriteCurrencies/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { exchangeRatesStore } from 'store/valtio/exchangeRateStore';
import { EDimensions, TAvailableCurrenciesNames } from 'types';
import { useSnapshot } from 'valtio';

import { ListFooterComponent } from './components/FooterComponent/ListFooterComponent';
import { useLayoutProvider, useLongPressSwipeGesture } from './hooks';

import { useStyles } from './CurrencySelector.styles';

const dataProvider = new DataProvider((r1, r2) => r1 !== r2);

export const CurrencySelector = React.memo(() => {
  const styles = useStyles();

  const windowHeight = useWindowDimensionChange(EDimensions.HEIGHT);
  const { top } = useSafeAreaInsets();

  const visibleItemsShared = useSharedValue<number[]>([]);
  const selectionModeShared = useSharedValue(1);
  const selectedDuringSwipeShared = useSharedValue(0);

  const listViewRef =
    useRef<RecyclerListView<RecyclerListViewProps, RecyclerListViewState>>(
      null,
    );

  const { isLoading } = useSnapshot(exchangeRatesStore);
  const { currencies } = useSelector(selectSelectedCurrencies);
  const { favoriteCurrencies } = useSelector(selectFavoriteCurrencies);

  const { reloadCourses } = useGetCurrenciesExchangeCourse();

  const setEditMode = useSetEditMode();
  const addToCurrInEdit = useAddToSelectedCurrenciesInEdit();
  const removeFromSelectedCurrenciesInEdit =
    useRemoveFromSelectedCurrenciesInEdit();

  const renderItem: RecyclerListViewProps['rowRenderer'] = useCallback(
    (_, data) => <CurrencyInputValue currencyCode={data} />,
    [],
  );
  const renderFooter = useCallback(() => <ListFooterComponent />, []);
  const layoutProvider = useLayoutProvider();

  const sortedWithFavorites = useMemo(() => {
    return Object.keys(currencies).sort(a => {
      if (favoriteCurrencies[a as TAvailableCurrenciesNames]) return -1;
      return 1;
    }) as TAvailableCurrenciesNames[];
  }, [favoriteCurrencies, currencies]);

  const onVisibleIndicesChanged = useCallback(
    (all: number[]) => (visibleItemsShared.value = all),
    [visibleItemsShared],
  );

  const gesture = useLongPressSwipeGesture({
    windowHeight,
    visibleItemsShared,
    sortedWithFavorites,
    selectionModeShared,
    selectedDuringSwipeShared,
    setEditMode,
    addToCurrInEdit,
    removeFromSelectedCurrenciesInEdit,
  });

  return sortedWithFavorites.length ? (
    <GestureDetector gesture={gesture}>
      <RecyclerListView
        ref={listViewRef}
        style={styles.recyclerContainer}
        layoutProvider={layoutProvider}
        dataProvider={dataProvider.cloneWithRows(sortedWithFavorites)}
        rowRenderer={renderItem}
        //@ts-expect-error
        refreshControl={
          <AppRefreshControl
            refreshing={isLoading}
            onRefresh={reloadCourses}
            progressViewOffset={top + 30}
          />
        }
        renderFooter={renderFooter}
        canChangeSize
        layoutSize={{
          height: windowHeight - 100 - top - 44,
          width: WINDOW_WIDTH,
        }}
        onVisibleIndicesChanged={onVisibleIndicesChanged}
        optimizeForInsertDeleteAnimations
        automaticallyAdjustKeyboardInsets
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      />
    </GestureDetector>
  ) : null;
});
