import { useEffect, useMemo, useState } from 'react';
import { Keyboard } from 'react-native';

import { UseCurrenciesListToArray } from './CurrencySelector.types';

export const useCurrenciesListToArray: UseCurrenciesListToArray =
  avaliableCurrencies =>
    useMemo(
      () =>
        Object.keys(avaliableCurrencies).map(value => ({
          [value]: {
            Cur_Name: avaliableCurrencies[value].Cur_Name,
            Cur_Symbol: avaliableCurrencies[value].Cur_Symbol,
            Cur_Abbreviation: avaliableCurrencies[value].Cur_Abbreviation,
          },
        })),
      [avaliableCurrencies],
    );

export const useTrackKeyboardStatus = () => {
  const [keyBoardOpened, setKeyBoardOpened] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardOpened(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardOpened(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return keyBoardOpened;
};
