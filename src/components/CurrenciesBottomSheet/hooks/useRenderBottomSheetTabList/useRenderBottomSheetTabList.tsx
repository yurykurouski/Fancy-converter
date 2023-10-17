import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { BottomSheetEmpty } from 'components/CurrenciesBottomSheet/components/BottomSheetEmpty';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { ECurrencyType } from 'types';
import { groupByName, makeSectionsData } from 'utils';

import { useRenderListItem } from '../useRenderListItem';
import { useRenderSectionHeader } from '../useRenderSectionHeader';

import { useStyles } from '../../CurrenciesBottomSheet.styles';

export const useRenderBottomSheetTabList = () => {
  const styles = useStyles();

  const { filteredCurrencies } = useSelector(selectSelectedCurrencies);

  const renderItem = useRenderListItem();
  const renderSectionHeader = useRenderSectionHeader();

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
          removeClippedSubviews={false}
          ListEmptyComponent={BottomSheetEmpty}
          overScrollMode="always"
          stickySectionHeadersEnabled
          getItemLayout={(_, index) => ({
            length: 76,
            offset: 76 * index,
            index,
          })}
        />
      );
    },
    [filteredCurrencies, renderItem, renderSectionHeader, styles.listContainer],
  );
};
