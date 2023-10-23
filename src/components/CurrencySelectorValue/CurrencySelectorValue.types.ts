import { TSetSelectedCurrencies } from 'hooks/store/types';
import { EAvailableFiatNames } from 'types';

export type TUseOnPressHandler = (
  isActive: boolean,
  modalSelectedCurrencies: EAvailableFiatNames[],
  currencyCode: EAvailableFiatNames,
  setModalSelectedCurrencies: TSetSelectedCurrencies,
) => () => void;

export type TProps = {
  currencyCode: EAvailableFiatNames;
};
