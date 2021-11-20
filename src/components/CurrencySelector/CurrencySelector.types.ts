import {
  AvaliableCurrenciesInArray,
  AvaliableCurrenciesInObject,
} from 'types/avaliable-currencies';

export type UseCurrenciesListToArray = (
  avaliableCurrencies: AvaliableCurrenciesInObject,
) => AvaliableCurrenciesInArray[];
