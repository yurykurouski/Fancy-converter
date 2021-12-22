import { StyleSheet } from 'react-native';
import { getCurrentThemeColors, getScreenWidth } from 'utils';

const themeColors = getCurrentThemeColors();
const screenWidth = getScreenWidth();

export const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    height: '100%',
    width: screenWidth * 0.6,
    backgroundColor: themeColors.ACCENT_COLOR_DARKER,
    elevation: 20,
    shadowColor: 'black',
    zIndex: 2,
  },
  fadeContainer: {
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: 'black',
  },
  fade: {
    height: '100%',
    width: '100%',
  },
});
