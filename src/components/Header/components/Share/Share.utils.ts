import { l } from 'resources/localization';
import { TAvailableCurrenciesNames, TSelectedCurrencies } from 'types';
import { OnlyCourses } from 'utils/utils.types';

type TGetValues = (
  selectedCurrencies: TSelectedCurrencies,
  focusedCurrencyName: TAvailableCurrenciesNames | undefined,
  exchangeCourses: OnlyCourses | undefined,
  focusedCurrencyValue: string,
) => { [key in TAvailableCurrenciesNames]: string };

export const getValues: TGetValues = (
  selectedCurrencies,
  focusedCurrencyName,
  exchangeCourses,
  focusedCurrencyValue,
) =>
  Object.keys(selectedCurrencies).reduce((acc, el) => {
    if (el !== focusedCurrencyName && focusedCurrencyName && exchangeCourses) {
      const value = (
        (Number(focusedCurrencyValue) /
          Number(exchangeCourses[focusedCurrencyName])) *
        Number(exchangeCourses[el as TAvailableCurrenciesNames])
      ).toFixed(2);

      return {
        ...acc,
        [el]: value,
      };
    } else {
      return acc;
    }
  }, {} as { [key in TAvailableCurrenciesNames]: string });

export const getContentText = (values: ReturnType<TGetValues>) =>
  Object.keys(values).reduce((acc, el, index) => {
    if (index === 0) {
      return `${values[el as TAvailableCurrenciesNames]} ${el} (${
        l[el as TAvailableCurrenciesNames]
      }) ${l['share-rates_content']}\n`;
    } else {
      return `${acc}- ${values[el as TAvailableCurrenciesNames]} ${el} (${
        l[el as TAvailableCurrenciesNames]
      })\n`;
    }
  }, '');
