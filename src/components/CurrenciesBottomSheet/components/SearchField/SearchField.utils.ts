import { l } from 'resources/localization';
import { AvailableCryptoNames, AvailableFiatNames } from 'types';

export const mapCurrenciesNamesBasedOnLanguage = (
  currencies: AvailableFiatNames[] | AvailableCryptoNames[],
): string[] => currencies.map(curr => l[curr].toUpperCase());

export const filterCurrencies = (
  el: string,
  valueUpperCase: string,
  namesBasedOnLanguage: string,
): boolean =>
  el.includes(valueUpperCase) || namesBasedOnLanguage.includes(valueUpperCase);
