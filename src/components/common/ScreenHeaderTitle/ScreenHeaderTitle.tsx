import React from 'react';
import { Text } from 'react-native';
import {
  DrawerStackParamList,
  DrawerStackScreens,
} from 'navigation/DrawerStack/DrawerStack.routes';

import { useStyles } from './ScreenHeaderTitle.styles';

export const ScreenHeaderTitle = ({
  children,
}: {
  children: keyof DrawerStackParamList;
}) => {
  const styles = useStyles();

  return <Text style={styles.text}>{DrawerStackScreens[children]}</Text>;
};
