import { Dispatch, SetStateAction } from 'react';
import { DebouncedFunc } from 'lodash';

export type UseHandleTextChange = (props: {
  setAvaliableCurrencies: Dispatch<SetStateAction<string[]>>;
  setIsCalculatingValue: Dispatch<SetStateAction<boolean>>;
}) => DebouncedFunc<(value: string) => void>;

export type Props = {
  setIsCalculatingValue: Dispatch<SetStateAction<boolean>>;
  setAvaliableCurrencies: Dispatch<SetStateAction<string[]>>;
};
