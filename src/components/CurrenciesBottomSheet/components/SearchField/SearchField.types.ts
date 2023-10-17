import { Dispatch, SetStateAction } from 'react';
import { AvailableCurrenciesNames } from 'types';

export type TProps = {
  setAvailableCurrencies: Dispatch<SetStateAction<AvailableCurrenciesNames[]>>;
};
