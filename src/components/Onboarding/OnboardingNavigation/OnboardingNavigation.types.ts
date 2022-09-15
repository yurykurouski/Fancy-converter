import { MutableRefObject } from 'react';
import { FlatList } from 'react-native';

export type Props = {
  currentPage: number;
  flatListRef: MutableRefObject<FlatList<unknown>>;
};