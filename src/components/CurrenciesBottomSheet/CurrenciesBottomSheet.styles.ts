import { StyleSheet } from 'react-native';
import { getCurrentThemeColors } from 'utils/getCurrentColorTheme';

const themeColors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: themeColors.ACCENT_COLOR_DARKER,
  },
  handleContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  handlePressable: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  handle: {
    width: 60,
    height: 5,
    backgroundColor: themeColors.FONT_COLOR_FADED,
    borderRadius: 5,
  },
});
