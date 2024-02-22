import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
    borderRadius: 18,
    overflow: 'hidden',
  },
  moon: {
    position: 'absolute',
    top: 4,
    left: 4,
  },
  stars: {
    right: 19,
    top: 6,
    position: 'absolute',
  },
});
