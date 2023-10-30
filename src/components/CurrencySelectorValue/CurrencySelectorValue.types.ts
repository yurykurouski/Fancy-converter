import { TAddSelectedCurr, TRemoveSelectedCurr } from 'hooks/store/types';
import { EAvailableCryptoNames, EAvailableFiatNames } from 'types';

export type TUseOnPressHandler = (
  isActive: boolean,
  currencyCode: EAvailableFiatNames | EAvailableCryptoNames,
  removeSelected: TRemoveSelectedCurr,
  addSelected: TAddSelectedCurr,
) => () => void;

export type TProps = {
  currencyCode: EAvailableFiatNames;
};
