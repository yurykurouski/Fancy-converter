import { TSetSelectedCurrencies } from 'hooks/store/types';
import { AvailableFiatNames } from 'types';

export type TUseOnPressHandler = (
  isActive: boolean,
  modalSelectedCurrencies: AvailableFiatNames[],
  currencyCode: AvailableFiatNames,
  setModalSelectedCurrencies: TSetSelectedCurrencies,
) => () => void;

export type TProps = {
  currencyCode: AvailableFiatNames;
};
