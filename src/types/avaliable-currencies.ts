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
  Cur_ID?: number;
  Date?: string;
  Cur_Abbreviation: string;
  Cur_Scale?: number;
  Cur_Name: string;
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

export type FormattedCurrenciesCourses = {
  [key in AvaliableCurrenciesNames]?: string;
};

export type SelectedCurrencies = string[] | [];
