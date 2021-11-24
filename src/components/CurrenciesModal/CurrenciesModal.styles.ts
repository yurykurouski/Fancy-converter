import { StyleSheet } from 'react-native';

import { getCurrentThemeColors } from '../../utils/getCurrentColorTheme';

const colors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  wrapperVisibleBackground: {
    position: 'absolute',
    elevation: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.ACCENT_COLOR_DARKER,
  },
  container: {
    width: '95%',
    height: '95%',
    borderRadius: 10,
    backgroundColor: colors.ACCENT_COLOR_DARKER,
    alignSelf: 'center',
    paddingVertical: 10,
    elevation: 1,
    marginTop: '5%',
  },
  buttonsWrapper: {
    marginTop: 10,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
