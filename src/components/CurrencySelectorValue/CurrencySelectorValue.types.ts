import { TSetSelectedCurrencies } from 'hooks/store/types';
import { AvailableCurrenciesNames } from 'types';

export type TUseOnPressHandler = (
  isActive: boolean,
  modalSelectedCurrencies: AvailableCurrenciesNames[],
  currencyCode: AvailableCurrenciesNames,
  setModalSelectedCurrencies: TSetSelectedCurrencies,
) => () => void;

export type TProps = {
  currencyCode: AvailableCurrenciesNames;
};
