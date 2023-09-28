import { StyleSheet } from 'react-native';

import { DRAWER_CONTENT_WIDTH } from '../Drawer.constants';

export const styles = StyleSheet.create({
  iconsContainer: {
    width: DRAWER_CONTENT_WIDTH,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 'auto',
    justifyContent: 'space-between',
  },
});
