import { Dispatch, SetStateAction } from 'react';

export type UseHandleTextChange = (props: {
  setSearchValue: Dispatch<SetStateAction<string>>;
  setAvaliableCurrencies: Dispatch<SetStateAction<string[]>>;
  currencies: string[];
}) => (value: string) => void;

export type Props = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  offset: number;
  setAvaliableCurrencies: Dispatch<SetStateAction<string[]>>;
};
