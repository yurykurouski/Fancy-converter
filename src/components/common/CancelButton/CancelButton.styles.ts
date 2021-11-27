import { StyleSheet } from 'react-native';

import { getCurrentThemeColors } from './../../../utils/getCurrentColorTheme';

const colors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 24,
    backgroundColor: colors.ELEMENT_FADE_OR_BACKGROUND,
  },
});
