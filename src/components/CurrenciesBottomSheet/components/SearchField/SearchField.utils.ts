import { l } from 'resources/localization';
import { AvailableCurrenciesNames } from 'types';

export const mapCurrenciesNamesBasedOnLanguage = (
  currencies: AvailableCurrenciesNames[],
): string[] => currencies.map(curr => l[curr].toUpperCase());

export const filterCurrencies = (
  el: string,
  valueUpperCase: string,
  namesBasedOnLanguage: string,
): boolean =>
  el.includes(valueUpperCase) || namesBasedOnLanguage.includes(valueUpperCase);
