import { Dispatch, SetStateAction, useCallback } from 'react';
import { ScrollEvent } from 'recyclerlistview/dist/reactnative/core/scrollcomponent/BaseScrollView';
import { RecyclerListViewProps } from 'recyclerlistview';

let headerState = false;

export const useOnScrollOffsetChange = (
  setHeaderBlur: Dispatch<SetStateAction<boolean>>,
): RecyclerListViewProps['onScroll'] =>
  useCallback(
    ({ nativeEvent: { contentOffset } }: ScrollEvent) => {
      if (contentOffset.y >= 10 && !headerState) {
        setHeaderBlur((headerState = true));
      } else if (contentOffset.y < 10 && headerState) {
        setHeaderBlur((headerState = false));
      }
    },
    [setHeaderBlur],
  );
