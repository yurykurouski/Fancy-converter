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
  GEL = 'GEL',
  TRY = 'TRY',
  KZT = 'KZT',
}

export type CurrencyDescription = {
  Cur_ID?: number;
  Date?: string;
  Cur_Abbreviation: string;
  Cur_Scale?: number;
  Cur_OfficialRate?: number;
  Cur_Symbol?: string;
};

export type AvaliableCurrenciesInObject = {
  [x: string]: CurrencyDescription;
};

export type AvaliableCurrenciesInArray = {
  [key in AvaliableCurrenciesNames]?: CurrencyDescription;
};

export type ResultFromAPI = CurrencyDescription[];

export type CurrenciesCourses = {
  [key in AvaliableCurrenciesNames]?: CurrencyDescription;
};

export type SelectedCurrencies = string[] | [];
