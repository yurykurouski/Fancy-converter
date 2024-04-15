import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { BottomSheetFlatListMethods } from '@gorhom/bottom-sheet';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { l } from 'resources/localization';
import { selectedCurrenciesActions } from 'store/valtio/selectedCurrenciesStore';
import { ECurrencyType } from 'types';

import { useStyles } from './CurrencyTypeMenu.styles';

type TProps = {
  activeCurrencyType: ECurrencyType;
};

export const CurrencyTypeMenu = React.forwardRef<
  BottomSheetFlatListMethods,
  TProps
>(({ activeCurrencyType }, containerListRef) => {
  const styles = useStyles();

  const setFiat = useCallback(() => {
    selectedCurrenciesActions.setActiveCurrencyType(ECurrencyType.FIAT);

    //@ts-expect-error
    containerListRef?.current?.scrollToIndex({
      index: 0,
      animated: true,
    });
  }, [containerListRef]);

  const setCrypto = useCallback(() => {
    selectedCurrenciesActions.setActiveCurrencyType(ECurrencyType.CRYPTO);

    //@ts-expect-error
    containerListRef?.current?.scrollToIndex({
      index: 1,
      animated: true,
    });
  }, [containerListRef]);

  return (
    <>
      <ButtonWithIPadOSInteraction
        containerStyle={styles.container}
        onPress={setFiat}>
        <Text
          style={[
            styles.activeTab,
            activeCurrencyType === ECurrencyType.CRYPTO && styles.inactiveTab,
          ]}>
          {l['header-menu_currency_fiat']}
        </Text>
      </ButtonWithIPadOSInteraction>
      <ButtonWithIPadOSInteraction
        containerStyle={styles.container}
        onPress={setCrypto}>
        <Text
          style={[
            styles.activeTab,
            activeCurrencyType === ECurrencyType.FIAT && styles.inactiveTab,
          ]}>
          {l['header-menu_currency_crypto']}
        </Text>
      </ButtonWithIPadOSInteraction>
    </>
  );
});
