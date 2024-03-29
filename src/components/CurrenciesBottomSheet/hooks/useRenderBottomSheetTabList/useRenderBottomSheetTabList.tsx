import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { BottomSheetSectionList, WINDOW_HEIGHT } from '@gorhom/bottom-sheet';
import { BottomSheetEmpty } from 'components/CurrenciesBottomSheet/components/BottomSheetEmpty';
import { BOTTOMSHEET_EL_HEIGHT } from 'constants/index';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { ECurrencyType } from 'types';
import { groupByName, isAndroid, makeSectionsData } from 'utils';

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

  const initialNumToRender = Math.round(WINDOW_HEIGHT / BOTTOMSHEET_EL_HEIGHT);

  return useCallback(
    ({ item }: { item: ECurrencyType }) => {
      const sections = groupByName(filteredCurrencies[item]);
      const sectionsData = makeSectionsData(sections);

      return (
        <View style={styles.container} pointerEvents="box-none">
          <BottomSheetSectionList
            contentContainerStyle={styles.listContainer}
            sections={sectionsData}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={value => value}
            maxToRenderPerBatch={initialNumToRender}
            initialNumToRender={initialNumToRender}
            ListEmptyComponent={BottomSheetEmpty}
            onEndReachedThreshold={10}
            ItemSeparatorComponent={renderSeparator}
            overScrollMode="always"
            removeClippedSubviews={isAndroid}
          />
        </View>
      );
    },
    [
      filteredCurrencies,
      initialNumToRender,
      renderItem,
      renderSectionHeader,
      renderSeparator,
      styles.container,
      styles.listContainer,
    ],
  );
};
