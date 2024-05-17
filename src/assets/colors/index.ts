import { Platform } from 'react-native';

import { ColorsAndroid } from './colors.android';
import { ColorsIOS } from './colors.ios';

export enum ColorsDark {
  APP_BACKGROUND_PRIMARY = '#202124',
  FONT_PRIMARY_COLOR = '#ffffff',
  FONT_PRIMARY_COLOR_INVERTED = '#363535',
  FONT_SECONDARY_COLOR = '#ffffff',
  FONT_COLOR_FADED = '#808080',
  ELEMENT_FADE_OR_BACKGROUND = '#323236',
  ELEMENT_FADE_OR_BACKGROUND_DARKER = '#21212b',
  ELEMENT_FADE_OR_BACKGROUND_LIGHTER = '#424146',
  ACCENT_COLOR_LIGHTER = '#4F378B',
  ACCENT_COLOR_DARKER = '#1a1921',
  SUNSET_ORANGE = '#ef5350',
  OVERLAY = '#20212499',
}

export enum ColorsLight {
  APP_BACKGROUND_PRIMARY = '#f0f0f3',
  FONT_PRIMARY_COLOR = '#363535',
  FONT_PRIMARY_COLOR_INVERTED = '#ffffff',
  FONT_SECONDARY_COLOR = '#fafcfe',
  FONT_COLOR_FADED = '#808080',
  ELEMENT_FADE_OR_BACKGROUND = '#E1E1E3',
  ELEMENT_FADE_OR_BACKGROUND_DARKER = '#DADAE1',
  ELEMENT_FADE_OR_BACKGROUND_LIGHTER = '#D3D3D5',
  ACCENT_COLOR_LIGHTER = '#1a73e8',
  ACCENT_COLOR_DARKER = '#e9e9f0',
  SUNSET_ORANGE = '#ef5350',
  OVERLAY = '#f0f0f399',
}

export const Colors = Platform.select({
  ios: ColorsIOS,
  android: ColorsAndroid,
  default: ColorsIOS,
});
