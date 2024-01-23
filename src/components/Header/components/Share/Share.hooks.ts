import { useCallback } from 'react';
import { Share, ToastAndroid } from 'react-native';
import { useSelector } from 'react-redux';
import { l } from 'resources/localization';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectFocusedCurrency } from 'store/focusedCurrency/selectors';
import { selectSelectedInEdit } from 'store/selectedForEdit/selectors';
import { getSaveDateReadable, isAndroid } from 'utils';

import { getContentText, getValues } from './Share.utils';

export const useHandlePress = () => {
  const { selectedCurrencies, selectedAmount } =
    useSelector(selectSelectedInEdit);
  const { exchangeCourses, lastUpdated } = useSelector(selectExchangeCourses);
  const { focusedCurrencyName, focusedCurrencyValue } = useSelector(
    selectFocusedCurrency,
  );

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
      exchangeCourses,
      focusedCurrencyValue,
    );

    const contentText = getContentText(values);

    const date = `\n**${getSaveDateReadable(new Date(lastUpdated!))}**\n`;

    const footer = `\n${l['share-rates_footer']} fancy-converter.netlify.app`;

    Share.share({
      message: contentText + date + footer,
    });
  }, [
    exchangeCourses,
    focusedCurrencyName,
    focusedCurrencyValue,
    lastUpdated,
    selectedAmount,
    selectedCurrencies,
  ]);
};
