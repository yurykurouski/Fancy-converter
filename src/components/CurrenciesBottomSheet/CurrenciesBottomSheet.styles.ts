import { StyleSheet } from 'react-native';
import { getCurrentThemeColors } from 'utils';

const themeColors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
  },
  handleContainer: {
    height: 30,
    alignItems: 'center',
  },
  handlePressable: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  handle: {
    width: 50,
    height: 5,
    backgroundColor: themeColors.FONT_PRIMARY_COLOR,
    borderRadius: 5,
  },
  background: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: themeColors.ACCENT_COLOR_DARKER,
  },
});
