import { useCallback } from 'react';

import { UseHorizontalGestureHandler } from './types';

export const useHorizontalGestureHandler: UseHorizontalGestureHandler =
  animatedPosition =>
    useCallback(
      ({ nativeEvent }) => {
        const { translationX } = nativeEvent;
        if (translationX > 0) return;

        animatedPosition.setValue(translationX);
      },
      [animatedPosition],
    );
