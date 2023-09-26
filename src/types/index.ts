import { Action } from '@reduxjs/toolkit';
import by from 'resources/by.json';
import en from 'resources/en.json';
import ua from 'resources/ua.json';

//TODO: move to resources
export enum AvailableCurrenciesNames {
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
  AMD = 'AMD',
  AZN = 'AZN',
  ALL = 'ALL',
  BAM = 'BAM',
  BGN = 'BGN',
  DKK = 'DKK',
  HRK = 'HRK',
  MDL = 'MDL',
  MKD = 'MKD',
  RON = 'RON',
  RSD = 'RSD',
}

export type TDispatchCallback<T, A> = (value: T) => Action<A>;

export type TLocaleString = keyof typeof en | keyof typeof by | keyof typeof ua;
