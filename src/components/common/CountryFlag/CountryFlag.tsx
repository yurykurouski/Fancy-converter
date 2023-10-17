import React from 'react';
import { View } from 'react-native';
import { flags } from 'assets/flagsMap';
import { AvailableFlatNames } from 'types';

import { useStyles } from './CountryFlag.styles';

type Props = {
  currencyCode: AvailableFlatNames;
  size?: number;
};

export const CountryFlag = React.memo<Props>(({ currencyCode, size }) => {
  const styles = useStyles();

  const Flag = flags[currencyCode];

  return (
    <View style={styles.flagContainer}>
      <Flag width={size} height={size} />
    </View>
  );
});
