import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  BottomSheetFlatList,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '@gorhom/bottom-sheet';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { BottomSheetEmpty } from 'components/CurrenciesBottomSheet/components/BottomSheetEmpty';
import { BOTTOMSHEET_EL_HEIGHT } from 'constants/index';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { EAvailableFiatNames, ECurrencyType } from 'types';
import { groupByName, isIos, makeSectionsData } from 'utils';

import { useRenderListItem } from '../useRenderListItem';
import { useRenderSectionHeader } from '../useRenderSectionHeader';

import { useStyles } from '../../CurrenciesBottomSheet.styles';

export const useRenderBottomSheetTabList = (height: number) => {
  const styles = useStyles(height);

  const { filteredCurrencies } = useSelector(selectSelectedCurrencies);

  const renderItem = useRenderListItem();
  const renderSectionHeader = useRenderSectionHeader();
  const renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    [styles.separator],
  );

  const render = useCallback<ListRenderItem<EAvailableFiatNames | string>>(
    ({ item }) => {
      if (item.length !== 1) return renderItem(item as EAvailableFiatNames);
      return renderSectionHeader(item);
    },
    [renderItem, renderSectionHeader],
  );

  const initialNumToRender = Math.round(WINDOW_HEIGHT / BOTTOMSHEET_EL_HEIGHT);

  return useCallback(
    ({ item }: { item: ECurrencyType }) => {
      const groupedData = groupByName(filteredCurrencies[item]);
      const sectionsData = makeSectionsData(groupedData);

      return (
        <View style={styles.container}>
          <FlashList
            contentContainerStyle={styles.listContainer}
            data={sectionsData}
            renderItem={render}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={itemName => itemName}
            maxToRenderPerBatch={initialNumToRender}
            initialNumToRender={initialNumToRender}
            ListEmptyComponent={BottomSheetEmpty}
            onEndReachedThreshold={10}
            ItemSeparatorComponent={renderSeparator}
            overScrollMode="always"
            stickySectionHeadersEnabled={isIos}
            estimatedItemSize={BOTTOMSHEET_EL_HEIGHT}
            //@ts-expect-error
            renderScrollComponent={BottomSheetFlatList}
            estimatedListSize={{ height, width: WINDOW_WIDTH }}
            getItemType={el => (el.length === 1 ? 'sectionHeader' : 'row')}
          />
        </View>
      );
    },
    [
      filteredCurrencies,
      height,
      initialNumToRender,
      render,
      renderSectionHeader,
      renderSeparator,
      styles.container,
      styles.listContainer,
    ],
  );
};
