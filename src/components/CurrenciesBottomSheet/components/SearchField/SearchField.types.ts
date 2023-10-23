import { Dispatch, SetStateAction } from 'react';
import { EAvailableFiatNames } from 'types';

export type TProps = {
  setAvailableCurrencies: Dispatch<SetStateAction<EAvailableFiatNames[]>>;
};
