import React from 'react';
import { View } from 'react-native';
import { flags } from 'assets/flagsMap';
import { AvailableCurrenciesNames } from 'types';

import { styles } from './CountryFlag.styles';

type Props = {
  currencyCode: AvailableCurrenciesNames;
  size?: number;
};

export const CountryFlag = React.memo<Props>(({ currencyCode, size }) => {
  const Flag = flags[currencyCode];

  return (
    <View style={styles.flagContainer}>
      <Flag width={size} height={size} />
    </View>
  );
});
