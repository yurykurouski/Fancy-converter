import React from 'react';
import { View } from 'react-native';
import { flags } from 'assets/flagsMap';

import { styles } from './CountryFlag.styles';

type Props = {
  currencyCode: string;
  size: number;
};

export const CountryFlag = React.memo<Props>(({ currencyCode, size }) => {
  const Flag = flags[currencyCode];

  return (
    <View style={styles.flagContainer}>
      <Flag width={size} height={size} />
    </View>
  );
});
