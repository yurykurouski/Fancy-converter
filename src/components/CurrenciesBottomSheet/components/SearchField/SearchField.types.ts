import { Dispatch, SetStateAction } from 'react';
import { AvailableFlatNames } from 'types';

export type TProps = {
  setAvailableCurrencies: Dispatch<SetStateAction<AvailableFlatNames[]>>;
};
