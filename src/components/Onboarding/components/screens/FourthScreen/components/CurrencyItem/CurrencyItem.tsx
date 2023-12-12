import React from 'react';
import { Text, View } from 'react-native';
import { CancelButton } from 'components/common/CancelButton';
import { CountryFlag } from 'components/common/CountryFlag';
import { ICON_BUTTON_SIZE } from 'constants/index';
import { useRemoveSelected } from 'hooks/store/SelectedCurrencies';
import { EAvailableFiatNames } from 'types';

import { useStyles } from './CurrencyItem.styles';

type TProps = {
  currencyCode: EAvailableFiatNames;
  currencyName: string;
};

export const CurrencyItem = ({ currencyCode, currencyName }: TProps) => {
  const styles = useStyles();
  const removeSelected = useRemoveSelected();

  const onRemovePress = () => removeSelected(currencyCode);

  return (
    <View style={styles.currencyInfoWrapper}>
      <CountryFlag currencyCode={currencyCode} size={36} />
      <View style={styles.currencyCodeNameWrapper}>
        <View style={styles.currencyCodeContainer}>
          <Text style={styles.currencyCode}>{currencyCode}</Text>
        </View>
        <Text style={styles.currencyName}>{currencyName}</Text>
      </View>
      <CancelButton
        onPress={onRemovePress}
        size={ICON_BUTTON_SIZE}
        additionalStyle={styles.icon}
      />
    </View>
  );
};
