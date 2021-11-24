import { StyleSheet } from 'react-native';

import { getCurrentThemeColors } from './utils/getCurrentColorTheme';

const themeColors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
    paddingVertical: 25,
    alignSelf: 'center',
  },
  backgroundStyle: {
    height: '100%',
    backgroundColor: themeColors.APP_BACKGROUND_PRIMARY,
  },
});
