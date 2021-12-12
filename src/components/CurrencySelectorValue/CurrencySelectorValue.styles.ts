import { StyleSheet } from 'react-native';

import { getCurrentThemeColors } from '../../utils/getCurrentColorTheme';

const colors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  currencyBlockWrapper: {
    backgroundColor: colors.ELEMENT_FADE_OR_BACKGROUND,
    marginBottom: 10,
    borderRadius: 20,
  },
  currencyBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  currencyInfoWrapper: {
    flexDirection: 'row',
  },
  currencyCodeNameWrapper: {
    marginLeft: 10,
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
  checkBoxContainer: {
    left: 15,
  },
});
