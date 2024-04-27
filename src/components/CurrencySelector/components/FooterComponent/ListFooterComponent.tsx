import React from 'react';
import { Text, View } from 'react-native';
import { RefreshIcon } from 'assets/icons';
import { exchangeRatesStore } from 'store/exchangeRateStore';
import { getSaveDateReadable } from 'utils';
import { useSnapshot } from 'valtio';

import { useStyles } from './ListFooterComponent.styles';

export const ListFooterComponent = () => {
  const styles = useStyles();
  const { lastUpdated } = useSnapshot(exchangeRatesStore);

  if (!lastUpdated) {
    return null;
  }

  const saveDate = getSaveDateReadable(new Date(lastUpdated));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{saveDate}</Text>
      <RefreshIcon size={14} />
    </View>
  );
};
