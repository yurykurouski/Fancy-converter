import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { GestureDetector } from 'react-native-gesture-handler';
import { SharedValue, useSharedValue } from 'react-native-reanimated';
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
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectFavoriteCurrencies } from 'store/favoriteCurrencies/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { EDimensions, TAvailableCurrenciesNames } from 'types';

import { ListFooterComponent } from './components/FooterComponent/ListFooterComponent';
import {
  useLayoutProvider,
  useLongPressSwipeGesture,
  useOnScrollOffsetChange,
} from './hooks';

import { useStyles } from './CurrencySelector.styles';

import { KeyboardAvoidingHOC } from 'HOC/KeyboardAvoidingHOC';

type TProps = {
  setIsHeaderBlurred: Dispatch<SetStateAction<boolean>>;
  drawerPosition: SharedValue<number>;
};

const dataProvider = new DataProvider((r1, r2) => r1 !== r2);

export const CurrencySelector = React.memo<TProps>(
  ({ setIsHeaderBlurred, drawerPosition }) => {
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

    const { isLoading } = useSelector(selectExchangeCourses);
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
    const renderFooter = useCallback(
      () => <ListFooterComponent drawerPosition={drawerPosition} />,
      [drawerPosition],
    );
    const layoutProvider = useLayoutProvider();

    const onOffsetChange = useOnScrollOffsetChange(setIsHeaderBlurred);

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
      <KeyboardAvoidingHOC>
        <GestureDetector gesture={gesture}>
          <RecyclerListView
            ref={listViewRef}
            style={styles.recyclerContainer}
            layoutProvider={layoutProvider}
            dataProvider={dataProvider.cloneWithRows(sortedWithFavorites)}
            rowRenderer={renderItem}
            onScroll={onOffsetChange}
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
          />
        </GestureDetector>
      </KeyboardAvoidingHOC>
    ) : null;
  },
);
