import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const SNAP_POINTS = [30, 70, windowHeight - 75];
export const DIRECTIONS_UP = 'up';
export const DIRECTIONS_DOWN = 'down';
export const OFFSET = {
  offset: 0,
  direction: '',
};
