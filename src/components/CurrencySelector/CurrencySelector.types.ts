import { AvaliableCurrenciesInArray, CurrenciesCourses } from 'types';

export type UseCurrenciesListToArray = (
  avaliableCurrencies: CurrenciesCourses,
) => AvaliableCurrenciesInArray[];
