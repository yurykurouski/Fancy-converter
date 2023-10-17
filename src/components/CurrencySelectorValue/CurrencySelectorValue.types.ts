import { TSetSelectedCurrencies } from 'hooks/store/types';
import { AvailableFlatNames } from 'types';

export type TUseOnPressHandler = (
  isActive: boolean,
  modalSelectedCurrencies: AvailableFlatNames[],
  currencyCode: AvailableFlatNames,
  setModalSelectedCurrencies: TSetSelectedCurrencies,
) => () => void;

export type TProps = {
  currencyCode: AvailableFlatNames;
};
