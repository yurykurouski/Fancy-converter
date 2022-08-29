import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { FlatList } from 'react-native';

export type Props = {
  currentPage: number;
  flatListRef: MutableRefObject<FlatList<unknown>>;
  setIsOnboarded: Dispatch<SetStateAction<boolean>>;
};
