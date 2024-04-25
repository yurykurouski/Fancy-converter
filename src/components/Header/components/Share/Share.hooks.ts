import { useCallback } from 'react';
import { Share, ToastAndroid } from 'react-native';
import { l } from 'resources/localization';
import { exchangeRatesStore } from 'store/exchangeRateStore';
import { focusedCurrencyStore } from 'store/focusedCurrencyStore';
import { selectedForEditStore } from 'store/selectedForEditStore';
import { getSaveDateReadable, isAndroid } from 'utils';
import { useSnapshot } from 'valtio';

import { getContentText, getValues } from './Share.utils';

export const useHandlePress = () => {
  const { selectedCurrencies, selectedAmount } =
    useSnapshot(selectedForEditStore);
  const { exchangeRates, lastUpdated } = useSnapshot(exchangeRatesStore);
  const { focusedCurrencyName, focusedCurrencyValue } =
    useSnapshot(focusedCurrencyStore);

  return useCallback(() => {
    if (selectedAmount < 2 || !focusedCurrencyValue) {
      return (
        isAndroid &&
        ToastAndroid.show(l['currencies_main.no-share'], ToastAndroid.SHORT)
      );
    }

    const values = getValues(
      selectedCurrencies,
      focusedCurrencyName,
      exchangeRates,
      focusedCurrencyValue,
    );

    const contentText = getContentText(values);

    const date = `\n**${getSaveDateReadable(new Date(lastUpdated!))}**\n`;

    const footer = `\n${l['share-rates_footer']} fancy-converter.netlify.app`;

    Share.share({
      message: contentText + date + footer,
    });
  }, [
    exchangeRates,
    focusedCurrencyName,
    focusedCurrencyValue,
    lastUpdated,
    selectedAmount,
    selectedCurrencies,
  ]);
};
