import { Platform } from 'react-native';
import { ColorSchemeName } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { THEME_COLORS } from 'assets/colors';
import { ScreenHeader, ScreenHeaderLeft, ScreenHeaderTitle } from 'components';

export const withoutHeader = { headerShown: false };
export const getDefaultOptions = (colorScheme: ColorSchemeName) =>
  Platform.select({
    ios: {
      headerLeft: ScreenHeaderLeft,
      headerTitle: ScreenHeaderTitle,
      headerStyle: {
        backgroundColor: THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY,
      },
      headerShadowVisible: false,
    },
    android: {
      header: ScreenHeader,
      headerShadowVisible: false,
    },
  }) as NativeStackNavigationOptions;
