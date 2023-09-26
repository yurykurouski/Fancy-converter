import { RefObject } from 'react';
import { FlatList } from 'react-native';

export type Props = {
  currentPage: number;
  flatListRef: RefObject<FlatList<unknown>>;
};
