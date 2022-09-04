import { Dispatch, SetStateAction } from 'react';

export type UseOnPressHandler = (
  isExpanded: boolean,
  isActive: boolean,
  modalSelectedCurrencies: string[] | [],
  currencyCode: string,
  setModalSelectedCurrencies: Dispatch<SetStateAction<string[] | []>>,
) => () => void;

export type Props = {
  currencyCode: string;
  modalSelectedCurrencies: string[] | [];
  setModalSelectedCurrencies: Dispatch<SetStateAction<string[] | []>>;
  isExpanded: boolean;
};
