import { useCallback } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import {
  DIRECTIONS_DOWN,
  DIRECTIONS_UP,
  OFFSET,
} from '../CurrenciesBottomSheet.consts';
import { handleScrollDirectionChange } from '../CurrenciesBottomSheet.utils';

export const useHandleScroll = (bottom: number) =>
  useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentOffset = event.nativeEvent.contentOffset.y;
      const dif = currentOffset - OFFSET.offset;

      if (Math.abs(dif) < 25) return;

      const direction = dif > 0 ? DIRECTIONS_DOWN : DIRECTIONS_UP;
      OFFSET.offset = currentOffset;

      if (direction === OFFSET.direction) return;

      OFFSET.direction = dif > 0 ? DIRECTIONS_DOWN : DIRECTIONS_UP;

      handleScrollDirectionChange(OFFSET.direction, bottom);
    },
    [bottom],
  );
