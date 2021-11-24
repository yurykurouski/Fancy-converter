import { StyleSheet } from 'react-native';

import { getCurrentThemeColors } from '../../../utils/getCurrentColorTheme';

const colors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  currencyBlock: {
    backgroundColor: colors.ELEMENT_FADE_OR_BACKGROUND,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  currencyCode: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.FONT_PRIMARY_COLOR,
  },
  currencyName: {
    fontSize: 14,
    color: colors.FONT_COLOR_FADED,
  },
});
