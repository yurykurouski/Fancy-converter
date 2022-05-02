export type FocusedCurrencyContext = {
  focusedCurrencyContext?: {
    focusedCurrency: {
      focusedCurrencyName: string;
      focusedCurrencyValue: string;
    };
    setFocusedCurrencyName: React.Dispatch<React.SetStateAction<string>>;
    setFocusedCurrencyValue: React.Dispatch<React.SetStateAction<string>>;
  };
};
