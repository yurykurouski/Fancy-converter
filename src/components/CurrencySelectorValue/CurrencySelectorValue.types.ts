import { TAvailableCurrenciesNames } from 'types';

export type TUseOnPressHandler = (
  isActive: boolean,
  currencyCode: TAvailableCurrenciesNames,
  removeSelected: (currName: TAvailableCurrenciesNames) => void,
  addSelected: (currName: TAvailableCurrenciesNames) => void,
) => () => void;

export type TProps = {
  currencyCode: TAvailableCurrenciesNames;
};
