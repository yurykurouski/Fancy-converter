import {
  HORIZONTAL_SWIPES,
  SWIPE_DIRECTIONS,
  VERTICAL_SWIPES,
} from 'constants';
import { useCallback } from 'react';
import {
  HandlerStateChangeEvent,
  PanGestureHandlerEventPayload,
  State,
} from 'react-native-gesture-handler';

type Handler = (
  e: HandlerStateChangeEvent<PanGestureHandlerEventPayload>,
) => void;

type UseHandleSwipeDirection = (
  handler: () => void,
  direction: SWIPE_DIRECTIONS,
) => Handler;

export const useHandleSwipeDirection: UseHandleSwipeDirection = (
  handler,
  direction,
) =>
  useCallback(
    e => {
      const { nativeEvent } = e;

      if (e.nativeEvent.oldState === State.ACTIVE) {
        const swipeAxis =
          Math.abs(nativeEvent.velocityX) > Math.abs(nativeEvent.velocityY)
            ? HORIZONTAL_SWIPES
            : VERTICAL_SWIPES;

        if (!swipeAxis.includes(direction)) return;

        const vecityAxis =
          swipeAxis === HORIZONTAL_SWIPES
            ? nativeEvent.velocityX
            : nativeEvent.velocityY;

        const swipeDirection = vecityAxis < 0 ? swipeAxis[0] : swipeAxis[1];

        if (swipeDirection === direction) handler();
      }
    },
    [direction, handler],
  );
