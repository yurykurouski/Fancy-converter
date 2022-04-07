import { CurrenciesCourses } from 'types/avaliable-currencies';

import { AvaliableCurrenciesInArray } from './../../types/avaliable-currencies';

export type UseCurrenciesListToArray = (
  avaliableCurrencies: CurrenciesCourses,
) => AvaliableCurrenciesInArray[];
