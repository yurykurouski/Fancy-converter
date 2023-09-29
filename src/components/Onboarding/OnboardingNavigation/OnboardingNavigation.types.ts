import Animated, { AnimatedRef } from 'react-native-reanimated';

export type Props = {
  currentPage: number;
  scrollListRef: AnimatedRef<Animated.ScrollView>;
};
