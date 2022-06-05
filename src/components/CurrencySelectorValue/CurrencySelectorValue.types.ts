import { CurrenciesCourses } from 'types';

export type UseOnPressHandler = (
  isExpanded: boolean,
  isActive: boolean,
  modalSelectedCurrencies: string[] | [],
  currencyCode: string,
  setModalSelectedCurrencies: React.Dispatch<
    React.SetStateAction<string[] | []>
  >,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
) => () => void;

export type Props = {
  value: CurrenciesCourses;
  modalSelectedCurrencies: string[] | [];
  setModalSelectedCurrencies: React.Dispatch<
    React.SetStateAction<string[] | []>
  >;
  isExpanded: boolean;
};
