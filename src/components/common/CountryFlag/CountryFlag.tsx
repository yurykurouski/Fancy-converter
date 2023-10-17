import React from 'react';
import { View } from 'react-native';
import { flags } from 'assets/flagsMap';
import { AvailableFlatNames } from 'types';

import { styles } from './CountryFlag.styles';

type Props = {
  currencyCode: AvailableFlatNames;
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
