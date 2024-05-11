import { Platform } from 'react-native';

import { ColorsAndroid } from './colors.android';
import { ColorsIOS } from './colors.ios';

export const Colors = Platform.select({
  ios: ColorsIOS,
  android: ColorsAndroid,
  default: ColorsIOS,
});
