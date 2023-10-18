import { Dispatch, SetStateAction } from 'react';
import { AvailableFiatNames } from 'types';

export type TProps = {
  setAvailableCurrencies: Dispatch<SetStateAction<AvailableFiatNames[]>>;
};
