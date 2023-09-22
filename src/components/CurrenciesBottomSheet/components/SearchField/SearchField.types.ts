import { Dispatch, SetStateAction } from 'react';
import { DebouncedFunc } from 'lodash';

export type UseHandleTextChange = (props: {
  setAvailableCurrencies: Dispatch<SetStateAction<string[]>>;
  setIsCalculatingValue: Dispatch<SetStateAction<boolean>>;
}) => DebouncedFunc<(value: string) => void>;

export type Props = {
  setIsCalculatingValue: Dispatch<SetStateAction<boolean>>;
  setAvailableCurrencies: Dispatch<SetStateAction<string[]>>;
};
