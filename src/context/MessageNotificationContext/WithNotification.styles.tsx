import { StyleSheet } from 'react-native';
import { getCurrentThemeColors } from 'utils';

const themeColors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: themeColors.ACCENT_COLOR_LIGHTER,
    minWidth: '50%',
    maxWidth: '100%',
    top: -50,
    minHeight: 32,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    elevation: 3,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: themeColors.FONT_SECONDARY_COLOR,
  },
});
