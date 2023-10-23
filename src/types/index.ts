import { Action } from '@reduxjs/toolkit';
import by from 'resources/by.json';
import en from 'resources/en.json';
import ua from 'resources/ua.json';

//TODO: move to resources
export enum AvailableFiatNames {
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
  ARS = 'ARS',
  AED = 'AED',
  BRL = 'BRL',
  CLP = 'CLP',
  EGP = 'EGP',
  GTQ = 'GTQ',
  HKD = 'HKD',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  INR = 'INR',
  IRR = 'IRR',
  IQD = 'IQD',
  ISK = 'ISK',
  JMD = 'JMD',
  JOD = 'JOD',
  KES = 'KES',
  KGS = 'KGS',
  KHR = 'KHR',
  KMF = 'KMF',
  KRW = 'KRW',
  KWD = 'KWD',
  KYD = 'KYD',
  LAK = 'LAK',
  LBP = 'LBP',
  LKR = 'LKR',
  LRD = 'LRD',
  LSL = 'LSL',
  LYD = 'LYD',
  MAD = 'MAD',
  MMK = 'MMK',
  MNT = 'MNT',
  MRU = 'MRU',
  MUR = 'MUR',
  MVR = 'MVR',
  MXN = 'MXN',
  MYR = 'MYR',
  MZN = 'MZN',
  NAD = 'NAD',
  NGN = 'NGN',
  NIO = 'NIO',
  NPR = 'NPR',
  NZD = 'NZD',
  OMR = 'OMR',
  PAB = 'PAB',
  PEN = 'PEN',
  PGK = 'PGK',
  PHP = 'PHP',
  PKR = 'PKR',
  PYG = 'PYG',
  QAR = 'QAR',
  SAR = 'SAR',
  SBD = 'SBD',
  SCR = 'SCR',
  SGD = 'SGD',
  SKK = 'SKK',
  SLL = 'SLL',
  SVC = 'SVC',
  SYP = 'SYP',
  THB = 'THB',
  TJS = 'TJS',
  TMT = 'TMT',
  TND = 'TND',
  TWD = 'TWD',
  TZS = 'TZS',
  UZS = 'UZS',
  VES = 'VES',
  VND = 'VND',
  WST = 'WST',
  XAF = 'XAF',
  YER = 'YER',
  ZAR = 'ZAR',
  ZMK = 'ZMK',
  JEP = 'JEP',
  IMP = 'IMP',
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
  FIAT = 'FIAT',
  CRYPTO = 'CRYPTO',
}

export type TAvailableCurrencies = {
  [ECurrencyType.FIAT]: AvailableFiatNames[];
  [ECurrencyType.CRYPTO]: AvailableCryptoNames[];
};

export enum ENotificationType {
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
  RATES_UPDATED = 'RATES_UPDATED',
}

export type TNotificationData = {
  type: ENotificationType;
  timeStamp: number;
  data?: unknown;
};
