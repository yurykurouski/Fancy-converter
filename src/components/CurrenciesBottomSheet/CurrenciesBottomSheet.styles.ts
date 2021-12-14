import { StyleSheet } from 'react-native';
import { getCurrentThemeColors } from 'utils/getCurrentColorTheme';

const themeColors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: themeColors.ACCENT_COLOR_DARKER,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  handleContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
  },
  handlePressable: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  handle: {
    width: 50,
    height: 5,
    backgroundColor: themeColors.FONT_COLOR_FADED,
    borderRadius: 5,
  },
});
