import { ViewToken } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import { runOnJS, SharedValue, useSharedValue } from 'react-native-reanimated';
import { HEADER_HEIGHT, INPUT_ELEMENT_HEIGHT } from 'constants/index';
import { selectedForEditStore } from 'store/selectedForEditStore';
import { TAvailableCurrenciesNames } from 'types';
import { triggerSelectionHaptic } from 'utils';
import { useSnapshot } from 'valtio';

import { useHandleLongPress } from './useHandleLongPress';

type TProps = {
  top: number;
  windowHeight: number;
  visibleItemsShared: SharedValue<ViewToken[] | TAvailableCurrenciesNames[]>;
  sortedWithFavorites: TAvailableCurrenciesNames[];
  selectionModeShared: SharedValue<number>;
  selectedDuringSwipeShared: SharedValue<number>;
  setEditMode: (value: boolean) => void;
  addToCurrInEdit: (currName: TAvailableCurrenciesNames) => void;
  removeFromSelectedCurrenciesInEdit: (
    currName: TAvailableCurrenciesNames,
  ) => void;
};

export const useLongPressSwipeGesture = ({
  top,
  windowHeight,
  visibleItemsShared,
  sortedWithFavorites,
  selectionModeShared,
  selectedDuringSwipeShared,
  setEditMode,
  addToCurrInEdit,
  removeFromSelectedCurrenciesInEdit,
}: TProps) => {
  const { selectedCurrencies } = useSnapshot(selectedForEditStore);

  const lastSelectedShared = useSharedValue<
    ViewToken | TAvailableCurrenciesNames | null
  >(null);
  const isLongPressed = useSharedValue(0);

  const handleLongPress = useHandleLongPress({
    addToCurrInEdit,
    removeFromSelectedCurrenciesInEdit,
    selectedCurrencies,
    selectionModeShared,
    setEditMode,
    selectedDuringSwipeShared,
  });

  return (
    Gesture.LongPress()
      .minDuration(1000)
      .maxDistance(windowHeight)
      .shouldCancelWhenOutside(false)
      .onStart(event => {
        isLongPressed.value = 1;
        const pressedIndex = Math.floor(event?.y / INPUT_ELEMENT_HEIGHT);
        const pressedInVisibles = visibleItemsShared.value?.[pressedIndex];

        if (pressedInVisibles !== undefined) {
          runOnJS(handleLongPress)(
            sortedWithFavorites[
              (pressedInVisibles as ViewToken).index ?? pressedIndex
            ],
          );
          lastSelectedShared.value = pressedInVisibles;
        }
      })
      // eslint-disable-next-line sonarjs/cognitive-complexity
      .onTouchesMove(event => {
        if (isLongPressed.value && selectionModeShared.value !== -1) {
          const { y } = event.changedTouches[0];

          const pressedIndex = Math.floor(
            (y + HEADER_HEIGHT + top) / INPUT_ELEMENT_HEIGHT,
          );
          const pressedInVisibles =
            visibleItemsShared.value?.[pressedIndex - 1];

          if (
            lastSelectedShared.value !== pressedInVisibles &&
            pressedInVisibles !== undefined
          ) {
            if (
              !selectedCurrencies[
                sortedWithFavorites[
                  (pressedInVisibles as ViewToken).index! ?? pressedIndex - 1
                ]
              ] &&
              selectionModeShared.value === 1
            ) {
              selectedDuringSwipeShared.value += 1;

              runOnJS(addToCurrInEdit)(
                sortedWithFavorites[
                  (pressedInVisibles as ViewToken).index! ?? pressedIndex - 1
                ],
              );

              runOnJS(triggerSelectionHaptic)();
            } else if (
              selectedCurrencies[
                sortedWithFavorites[
                  (pressedInVisibles as ViewToken).index! ?? pressedIndex - 1
                ]
              ] &&
              selectionModeShared.value === 0
            ) {
              selectedDuringSwipeShared.value -= 1;

              runOnJS(removeFromSelectedCurrenciesInEdit)(
                sortedWithFavorites[
                  (pressedInVisibles as ViewToken).index! ?? pressedIndex - 1
                ],
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
      })
  );
};
