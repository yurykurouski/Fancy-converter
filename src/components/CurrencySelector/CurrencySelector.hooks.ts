import { Dispatch, SetStateAction, useCallback } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

let headerState = false;

export const useOnScrollOffsetChange = (
  setHeaderBlur: Dispatch<SetStateAction<boolean>>,
) => {
  return useCallback(
    ({
      nativeEvent: { contentOffset },
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (contentOffset.y >= 10 && !headerState) {
        setHeaderBlur((headerState = true));
      } else if (contentOffset.y < 10 && headerState) {
        setHeaderBlur((headerState = false));
      }
    },
    [setHeaderBlur],
  );
};
