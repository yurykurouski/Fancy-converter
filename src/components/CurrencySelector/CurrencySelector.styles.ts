import { StyleSheet } from 'react-native';

import { getCurrentThemeColors } from '../../utils/getCurrentColorTheme';

const colors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  fab: {
    backgroundColor: colors.ACCENT_COLOR_LIGHTER,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 30,
    elevation: 3,
    marginTop: 10,
    marginBottom: 10,
  },
  fabText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '500',
    color: colors.FONT_SECONDARY_COLOR,
  },
});
