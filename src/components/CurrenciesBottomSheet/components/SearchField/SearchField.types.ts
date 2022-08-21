import { Dispatch } from 'react';

export type UseHandleTextChange = (props: {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setAvaliableCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
  currencies: string[];
}) => (value: string) => void;

export type Props = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  offset: number;
  setAvaliableCurrencies: Dispatch<React.SetStateAction<string[]>>;
};
