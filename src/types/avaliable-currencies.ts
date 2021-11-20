// eslint-disable-next-line no-shadow
export enum AvaliableCurrenciesNames {
  USD = 'USD',
  EUR = 'EUR',
  RUB = 'RUB',
  GBP = 'GBP',
  CAD = 'CAD',
  PLN = 'PLN',
  UAH = 'UAH',
  SEK = 'SEK',
  CHF = 'CHF',
  JPY = 'JPY',
  CNY = 'CNY',
  CZK = 'CZK',
  NOK = 'NOK',
  BYN = 'BYN',
}

export type CurrencyDescription = {
  currencyName: string;
  currencySymbol: string;
  id: string;
};

export type AvaliableCurrenciesInObject = {
  [x: string]: CurrencyDescription;
};

export type AvaliableCurrenciesInArray = {
  [key in AvaliableCurrenciesNames]?: CurrencyDescription;
};
