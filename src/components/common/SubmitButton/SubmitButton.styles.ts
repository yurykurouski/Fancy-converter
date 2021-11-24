import { StyleSheet } from 'react-native';

import { getCurrentThemeColors } from '../../../utils/getCurrentColorTheme';

const colors = getCurrentThemeColors();

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 2,
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
  buttonTextAccept: {
    color: colors.MAIN_BUTTON_TEXT_COLOR,
  },
  buttonTextCancel: {
    color: '#8aa6d4',
  },
  acceptButton: {
    backgroundColor: colors.MAIN_BUTTON_COLOR,
  },
  cancelButton: {
    borderWidth: 1,
  },
});
