import { StyleSheet } from 'react-native';
import { getCurrentThemeColors } from 'utils';

const themeColors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
    width: '100%',
    backgroundColor: themeColors.APP_BACKGROUND_PRIMARY,
  },
});
