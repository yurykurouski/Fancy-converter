import { Dispatch, SetStateAction } from 'react';

export type FocusedCurrencyContext = {
  focusedCurrencyContext?: {
    focusedCurrency: {
      focusedCurrencyName: string;
      focusedCurrencyValue: string;
    };
    setFocusedCurrencyName: Dispatch<SetStateAction<string>>;
    setFocusedCurrencyValue: Dispatch<SetStateAction<string>>;
  };
};
