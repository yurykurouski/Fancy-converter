import { Dispatch, SetStateAction } from 'react';
import { DebouncedFunc } from 'lodash';
import { AvailableCurrenciesNames } from 'types';

export type UseHandleTextChange = (props: {
  setAvailableCurrencies: Dispatch<SetStateAction<AvailableCurrenciesNames[]>>;
  setIsCalculatingValue: Dispatch<SetStateAction<boolean>>;
}) => DebouncedFunc<(value: string) => void>;

export type TProps = {
  setAvailableCurrencies: Dispatch<SetStateAction<AvailableCurrenciesNames[]>>;
};
