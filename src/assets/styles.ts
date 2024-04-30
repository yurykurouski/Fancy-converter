import { Platform, ViewStyle } from 'react-native';

export const ELEVATION_1: ViewStyle = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 0.1,
  },
  android: {
    elevation: 1,
    overflow: 'hidden',
  },
})!;

export const ELEVATION_10 = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  android: {
    elevation: 10,
  },
}) as ViewStyle;

export const ELEVATIONS = {
  1: ELEVATION_1,
  10: ELEVATION_10,
};
