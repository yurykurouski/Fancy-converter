import React from 'react';
import { View } from 'react-native';

import BYN from '../../../assets/flags/BYN.svg';
import CAD from '../../../assets/flags/CAD.svg';
import CHF from '../../../assets/flags/CHF.svg';
import CNY from '../../../assets/flags/CNY.svg';
import CZK from '../../../assets/flags/CZK.svg';
import EUR from '../../../assets/flags/EUR.svg';
import GBP from '../../../assets/flags/GBP.svg';
import JPY from '../../../assets/flags/JPY.svg';
import NOK from '../../../assets/flags/NOK.svg';
import PLN from '../../../assets/flags/PLN.svg';
import RUB from '../../../assets/flags/RUB.svg';
import SEK from '../../../assets/flags/SEK.svg';
import UAH from '../../../assets/flags/UAH.svg';
import USD from '../../../assets/flags/USD.svg';
import { styles } from './CountryFlag.styles';

const flags = {
  BYN: BYN,
  CAD: CAD,
  CHF: CHF,
  CNY: CNY,
  CZK: CZK,
  EUR: EUR,
  GBP: GBP,
  JPY: JPY,
  NOK: NOK,
  PLN: PLN,
  RUB: RUB,
  SEK: SEK,
  UAH: UAH,
  USD: USD,
};

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
