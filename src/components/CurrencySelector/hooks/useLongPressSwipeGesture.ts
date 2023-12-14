import { Gesture } from 'react-native-gesture-handler';
import { runOnJS, SharedValue, useSharedValue } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { INPUT_ELEMENT_HEIGHT } from 'constants/index';
import {
  TAddToSelectedCurrenciesInEdit,
  TRemoveFromSelectedCurrenciesInEdit,
  TSetEditMode,
} from 'hooks/store/types';
import { selectSelectedInEdit } from 'store/selectedForEdit/selectors';
import { TAvailableCurrenciesNames } from 'types';
import { triggerSelectionHaptic } from 'utils';

import { useHandleLongPress } from './useHandleLongPress';

type TProps = {
  windowHeight: number;
  visibleItemsShared: SharedValue<number[]>;
  sortedWithFavorites: TAvailableCurrenciesNames[];
  selectionModeShared: SharedValue<number>;
  selectedDuringSwipeShared: SharedValue<number>;
  setEditMode: TSetEditMode;
  addToCurrInEdit: TAddToSelectedCurrenciesInEdit;
  removeFromSelectedCurrenciesInEdit: TRemoveFromSelectedCurrenciesInEdit;
};

export const useLongPressSwipeGesture = ({
  windowHeight,
  visibleItemsShared,
  sortedWithFavorites,
  selectionModeShared,
  selectedDuringSwipeShared,
  setEditMode,
  addToCurrInEdit,
  removeFromSelectedCurrenciesInEdit,
}: TProps) => {
  const { selectedCurrencies, selectedAmount } =
    useSelector(selectSelectedInEdit);

  const lastSelectedShared = useSharedValue<number | null>(null);
  const isLongPressed = useSharedValue(0);

  const handleLongPress = useHandleLongPress({
    addToCurrInEdit,
    removeFromSelectedCurrenciesInEdit,
    selectedCurrencies,
    selectionModeShared,
    setEditMode,
    selectedAmount,
    selectedDuringSwipeShared,
  });

  return Gesture.LongPress()
    .minDuration(1000)
    .maxDistance(windowHeight)
    .shouldCancelWhenOutside(false)
    .onStart(event => {
      isLongPressed.value = 1;

      const pressedIndex = Math.floor(event?.y / INPUT_ELEMENT_HEIGHT);
      const pressedInVisibles = visibleItemsShared.value?.[pressedIndex - 1];

      if (pressedInVisibles) {
        runOnJS(handleLongPress)(
          sortedWithFavorites[pressedInVisibles] as TAvailableCurrenciesNames,
        );
        lastSelectedShared.value = pressedInVisibles;
      }
    })
    .onTouchesMove(event => {
      if (isLongPressed.value && selectionModeShared.value !== -1) {
        const { y } = event.changedTouches[0];

        const pressedIndex = Math.floor(y / INPUT_ELEMENT_HEIGHT);
        const pressedInVisibles = visibleItemsShared.value?.[pressedIndex - 1];

        if (
          lastSelectedShared.value !== pressedInVisibles &&
          pressedInVisibles !== undefined
        ) {
          if (
            !selectedCurrencies[
              sortedWithFavorites[
                pressedInVisibles
              ] as TAvailableCurrenciesNames
            ] &&
            selectionModeShared.value === 1
          ) {
            selectedDuringSwipeShared.value =
              selectedDuringSwipeShared.value + 1;
            runOnJS(addToCurrInEdit)(sortedWithFavorites[pressedInVisibles]);
            runOnJS(triggerSelectionHaptic)();
          } else if (
            selectedCurrencies[sortedWithFavorites[pressedInVisibles]] &&
            selectionModeShared.value === 0
          ) {
            selectedDuringSwipeShared.value =
              selectedDuringSwipeShared.value - 1;
            runOnJS(removeFromSelectedCurrenciesInEdit)(
              sortedWithFavorites[pressedInVisibles],
            );
            runOnJS(triggerSelectionHaptic)();

            if (selectedDuringSwipeShared.value < 2) {
              selectedDuringSwipeShared.value = 0;
              runOnJS(setEditMode)(false);
            }
          }
          lastSelectedShared.value = pressedInVisibles;
        }
      }
    })
    .onEnd(() => {
      isLongPressed.value = 0;
    });
};
