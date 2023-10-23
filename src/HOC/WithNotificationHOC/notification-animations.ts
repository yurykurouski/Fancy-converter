import {
  ReduceMotion,
  SharedValue,
  withDelay,
  withSequence,
  withSpring,
} from 'react-native-reanimated';

export const showNotification = (
  animatedPosition: SharedValue<number>,
  hasIsland: boolean,
) =>
  (animatedPosition.value = hasIsland
    ? withSequence(
        withDelay(
          500,
          withSpring(46, {
            dampingRatio: 0.7,
            reduceMotion: ReduceMotion.System,
            duration: 800,
          }),
        ),
        withDelay(
          1300,
          withSpring(0, {
            dampingRatio: 0.7,
            reduceMotion: ReduceMotion.System,
            duration: 800,
          }),
        ),
      )
    : withSequence(
        withDelay(
          500,
          withSpring(58, {
            dampingRatio: 0.7,
            reduceMotion: ReduceMotion.System,
            duration: 800,
          }),
        ),
        withDelay(
          1300,
          withSpring(0, {
            dampingRatio: 0.7,
            reduceMotion: ReduceMotion.System,
            duration: 800,
          }),
        ),
      ));
