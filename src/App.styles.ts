import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { getCurrentColorTheme } from './utils/getCurrentColorTheme';

const isDarkMode = getCurrentColorTheme();

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
    paddingVertical: 25,
    alignSelf: 'center',
  },
  backgroundStyle: {
    height: '100%',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingHorizontal: 10,
  },
});
