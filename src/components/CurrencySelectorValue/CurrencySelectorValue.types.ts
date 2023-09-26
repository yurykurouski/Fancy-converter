import { TSetSelectedCurrencies } from 'hooks/store/types';
import { AvailableCurrenciesNames } from 'types';

export type TUseOnPressHandler = (
  isExpanded: boolean,
  isActive: boolean,
  modalSelectedCurrencies: AvailableCurrenciesNames[],
  currencyCode: AvailableCurrenciesNames,
  setModalSelectedCurrencies: TSetSelectedCurrencies,
) => () => void;

export type Props = {
  currencyCode: AvailableCurrenciesNames;
  modalSelectedCurrencies: AvailableCurrenciesNames[];
  setModalSelectedCurrencies: TSetSelectedCurrencies;
  isExpanded: boolean;
};
