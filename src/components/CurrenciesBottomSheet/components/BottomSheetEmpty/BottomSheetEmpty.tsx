import React from 'react';
import { Text, View } from 'react-native';
import { l } from 'resources/localization';

import { useStyles } from './BottomSheetEmpty.styles';

export const BottomSheetEmpty = () => {
  const styles = useStyles();

  return (
    <View style={styles.searchEmptyStateContainer}>
      <Text style={styles.searchEmptyStateText}>
        {l['currencies-bootomsheet_empty-search-result']}
      </Text>
    </View>
  );
};
