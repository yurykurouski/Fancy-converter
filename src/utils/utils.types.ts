import { TAvailableCurrenciesNames } from 'types';

export type OnlyCourses = {
  [key in TAvailableCurrenciesNames]: number;
};

export type ShowNoConnectionAlert = (
  onPress?: (value?: any) => void,
  saveDate?: string | null,
) => void;

export type TGetSaveDateReadable = (currentDate: Date) => string;
