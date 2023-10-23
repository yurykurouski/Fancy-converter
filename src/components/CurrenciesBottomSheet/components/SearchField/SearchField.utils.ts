import { l } from 'resources/localization';
import { EAvailableCryptoNames, EAvailableFiatNames } from 'types';

export const mapCurrenciesNamesBasedOnLanguage = (
  currencies: EAvailableFiatNames[] | EAvailableCryptoNames[],
): string[] => currencies.map(curr => l[curr].toUpperCase());

export const filterCurrencies = (
  el: string,
  valueUpperCase: string,
  namesBasedOnLanguage: string,
): boolean =>
  el.includes(valueUpperCase) || namesBasedOnLanguage.includes(valueUpperCase);
