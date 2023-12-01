import { useCallback } from 'react';
import { Keyboard, Vibration } from 'react-native';
import { TAvailableCurrenciesNames } from 'types';

import { TUseHandleLongPressParams } from '../CurrencySelector.types';

export const useHandleLongPress = ({
  addToCurrInEdit,
  removeFromSelectedCurrenciesInEdit,
  selectedCurrencies,
  selectionModeShared,
  setEditMode,
  selectedAmount,
  selectedDuringSwipeShared,
}: TUseHandleLongPressParams) =>
  useCallback(
    (currencyCode: TAvailableCurrenciesNames) => {
      Vibration.vibrate(1);
      Keyboard.dismiss();

      if (!selectedCurrencies[currencyCode]) {
        addToCurrInEdit(currencyCode);

        selectionModeShared.value = 1;
        selectedDuringSwipeShared.value = 1;
      } else {
        if (selectedAmount === 1) {
          setEditMode(false);

          selectionModeShared.value = -1;
          selectedDuringSwipeShared.value = 0;
        } else {
          removeFromSelectedCurrenciesInEdit(currencyCode);

          selectionModeShared.value = 0;
        }
      }
    },
    [
      selectedCurrencies,
      addToCurrInEdit,
      selectionModeShared,
      selectedDuringSwipeShared,
      selectedAmount,
      setEditMode,
      removeFromSelectedCurrenciesInEdit,
    ],
  );
