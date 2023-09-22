import { TSetSelectedCurrencies } from 'hooks/store/types';

export type UseOnPressHandler = (
  isExpanded: boolean,
  isActive: boolean,
  modalSelectedCurrencies: string[] | [],
  currencyCode: string,
  setModalSelectedCurrencies: TSetSelectedCurrencies,
) => () => void;

export type Props = {
  currencyCode: string;
  modalSelectedCurrencies: string[] | [];
  setModalSelectedCurrencies: TSetSelectedCurrencies;
  isExpanded: boolean;
};
