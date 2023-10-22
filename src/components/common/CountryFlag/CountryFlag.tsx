import React from 'react';
import { Image } from 'react-native';
import { flags } from 'assets/flagsMap';
import { AvailableFiatNames } from 'types';

import { useStyles } from './CountryFlag.styles';

type Props = {
  currencyCode: AvailableFiatNames;
  size?: number;
};

export const CountryFlag = React.memo<Props>(({ currencyCode, size }) => {
  const styles = useStyles(size);

  const flagImg = flags[currencyCode];

  return <Image source={flagImg} style={styles.flagContainer} />;
});
