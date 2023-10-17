import { Action } from '@reduxjs/toolkit';
import by from 'resources/by.json';
import en from 'resources/en.json';
import ua from 'resources/ua.json';

//TODO: move to resources
export enum AvailableFlatNames {
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

export enum AvailableCryptoNames {
  BTC = 'BTC',
  ETH = 'ETH',
  USDC = 'USDC',
  ADA = 'ADA',
  DAI = 'DAI',
  WBTC = 'WBTC',
  DOT = 'DOT',
  LINK = 'LINK',
  AVAX = 'AVAX',
  ATOM = 'ATOM',
  ETC = 'ETC',
  USDT = 'USDT',
  XRP = 'XRP',
  SOL = 'SOL',
  DOGE = 'DOGE',
  MATIC = 'MATIC',
  LTC = 'LTC',
  BCH = 'BCH',
  SHIB = 'SHIB',
  XLM = 'XLM',
  BUSD = 'BUSD',
  HBAR = 'HBAR',
  ICP = 'ICP',
  APT = 'APT',
  OP = 'OP',
  ARB = 'ARB',
  NEAR = 'NEAR',
  STX = 'STX',
  GRT = 'GRT',
  INJ = 'INJ',
  IMX = 'IMX',
  XTZ = 'XTZ',
  AXS = 'AXS',
  SAND = 'SAND',
  FIL = 'FIL',
  LDO = 'LDO',
  CRO = 'CRO',
  VET = 'VET',
  QNT = 'QNT',
  AAVE = 'AAVE',
  BSV = 'BSV',
  ALGO = 'ALGO',
  RNDR = 'RNDR',
  EGLD = 'EGLD',
  EOS = 'EOS',
}

export type TDispatchCallback<T, A> = (value: T) => Action<A>;

export type TLocaleString = keyof typeof en | keyof typeof by | keyof typeof ua;

export type TGroupByName<T> = (data: T[]) => {
  [key: string]: T[];
};

export enum EDimensions {
  WIDTH = 'width',
  HEIGHT = 'height',
}

export enum EColorSchemeBehavior {
  MANUAL = 'MANUAL',
  AUTO = 'AUTO',
}

export enum ECurrencyType {
  FLAT = 'FLAT',
  CRYPTO = 'CRYPTO',
}

export type TAvailableCurrencies = {
  [ECurrencyType.FLAT]: AvailableFlatNames[];
  [ECurrencyType.CRYPTO]: AvailableCryptoNames[];
};
