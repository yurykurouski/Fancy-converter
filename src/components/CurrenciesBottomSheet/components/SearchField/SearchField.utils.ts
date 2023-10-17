import { l } from 'resources/localization';
import { AvailableFlatNames } from 'types';

export const mapCurrenciesNamesBasedOnLanguage = (
  currencies: AvailableFlatNames[],
): string[] => currencies.map(curr => l[curr].toUpperCase());

export const filterCurrencies = (
  el: string,
  valueUpperCase: string,
  namesBasedOnLanguage: string,
): boolean =>
  el.includes(valueUpperCase) || namesBasedOnLanguage.includes(valueUpperCase);
