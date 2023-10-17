import React from 'react';
import { Text } from 'react-native';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { useSetActiveCurrencyType } from 'hooks/store/SelectedCurrencies';
import { l } from 'resources/localization';
import { ECurrencyType } from 'types';

import { useStyles } from './CurrencyTypeMenu.styles';

export const CurrencyTypeMenu = ({
  activeCurrencyType,
}: {
  activeCurrencyType: ECurrencyType;
}) => {
  const styles = useStyles();

  const setCurrencyType = useSetActiveCurrencyType();

  return (
    <>
      <ButtonWithIPadOSInteraction
        containerStyle={styles.container}
        onPress={() => {
          setCurrencyType(ECurrencyType.FLAT);
        }}>
        <Text
          style={[
            styles.activeTab,
            activeCurrencyType === ECurrencyType.CRYPTO && styles.inactiveTab,
          ]}>
          {l['header-menu_currency_flat']}
        </Text>
      </ButtonWithIPadOSInteraction>
      <ButtonWithIPadOSInteraction
        containerStyle={styles.container}
        onPress={() => {
          setCurrencyType(ECurrencyType.CRYPTO);
        }}>
        <Text
          style={[
            styles.activeTab,
            activeCurrencyType === ECurrencyType.FLAT && styles.inactiveTab,
          ]}>
          {l['header-menu_currency_crypto']}
        </Text>
      </ButtonWithIPadOSInteraction>
    </>
  );
};
