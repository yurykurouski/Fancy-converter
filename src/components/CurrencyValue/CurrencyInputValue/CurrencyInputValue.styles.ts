import { StyleSheet } from 'react-native';

import { getCurrentThemeColors } from '../../../utils/getCurrentColorTheme';

const colors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  containerWrapper: {
    borderRadius: 15,
    marginBottom: 10,
    borderColor: 'transparent',
    borderWidth: 2,
    overflow: 'hidden',
    backgroundColor: colors.ELEMENT_FADE_OR_BACKGROUND,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    alignItems: 'center',
    height: 60,
    paddingRight: 10,
  },
  containerWrapperFocused: {
    borderColor: colors.ACCENT_COLOR_LIGHTER,
  },
  title: {
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 10,
    color: colors.FONT_COLOR_FADED,
    fontSize: 22,
  },
  titleFocused: {
    color: colors.FONT_PRIMARY_COLOR,
    fontWeight: '500',
  },
  input: {
    height: 60,
    flexGrow: 1,
    fontSize: 24,
    fontWeight: '500',
    color: colors.FONT_PRIMARY_COLOR,
  },
});
