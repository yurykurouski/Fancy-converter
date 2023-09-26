import { RefObject } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

export type EventHandler = (
  event: NativeSyntheticEvent<NativeScrollEvent>,
) => void;

export type UseOnboardingHandlers = (
  flatListRef: RefObject<FlatList<unknown>>,
) => {
  currentPage: number;
  handleScroll: EventHandler;
  handleEndDrag: EventHandler;
  handleStartDrag: EventHandler;
};
