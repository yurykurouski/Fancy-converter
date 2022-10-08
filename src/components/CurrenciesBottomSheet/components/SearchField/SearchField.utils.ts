import { l } from 'resources/localization';

export const mapCurrenciesNamesBasedOnLanguage = (
  currencies: string[],
): string[] => currencies.map(curr => l[curr].toUpperCase());

export const filterCurrencies = (
  el: string,
  valueUpperCase: string,
  namesBasedOnLanguage: string,
): boolean =>
  el.includes(valueUpperCase) || namesBasedOnLanguage.includes(valueUpperCase);
