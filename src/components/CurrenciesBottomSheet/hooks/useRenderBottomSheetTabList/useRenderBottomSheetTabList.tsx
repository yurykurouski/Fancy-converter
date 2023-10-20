import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { BottomSheetSectionList, WINDOW_HEIGHT } from '@gorhom/bottom-sheet';
import { BottomSheetEmpty } from 'components/CurrenciesBottomSheet/components/BottomSheetEmpty';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { ECurrencyType } from 'types';
import { groupByName, isIos, makeSectionsData } from 'utils';

import { useRenderListItem } from '../useRenderListItem';
import { useRenderSectionHeader } from '../useRenderSectionHeader';

import { useStyles } from '../../CurrenciesBottomSheet.styles';

const CURR_IN_BS_HEIGHT = 66;

export const useRenderBottomSheetTabList = () => {
  const styles = useStyles();

  const { filteredCurrencies } = useSelector(selectSelectedCurrencies);

  const renderItem = useRenderListItem();
  const renderSectionHeader = useRenderSectionHeader();
  const renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    [styles.separator],
  );

  const initialNumToRender = Math.round(WINDOW_HEIGHT / CURR_IN_BS_HEIGHT);

  return useCallback(
    ({ item }: { item: ECurrencyType }) => {
      const groupedData = groupByName(filteredCurrencies[item]);
      const sectionsData = makeSectionsData(groupedData);

      return (
        <BottomSheetSectionList
          contentContainerStyle={[styles.listContainer]}
          //@ts-expect-error
          sections={sectionsData}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={itemName => itemName}
          maxToRenderPerBatch={initialNumToRender}
          initialNumToRender={initialNumToRender}
          ListEmptyComponent={BottomSheetEmpty}
          onEndReachedThreshold={10}
          ItemSeparatorComponent={renderSeparator}
          overScrollMode="always"
          stickySectionHeadersEnabled={isIos}
          getItemLayout={(_, index) => ({
            length: CURR_IN_BS_HEIGHT,
            offset: (CURR_IN_BS_HEIGHT + 10) * index,
            index,
          })}
        />
      );
    },
    [
      filteredCurrencies,
      initialNumToRender,
      renderItem,
      renderSectionHeader,
      renderSeparator,
      styles.listContainer,
    ],
  );
};
