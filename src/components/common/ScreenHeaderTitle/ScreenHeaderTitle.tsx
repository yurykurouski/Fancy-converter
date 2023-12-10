import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import {
  DrawerStackParamList,
  DrawerStackScreens,
} from 'navigation/DrawerStack/DrawerStack.routes';

import { useStyles } from './ScreenHeaderTitle.styles';

export const ScreenHeaderTitle = ({
  route,
}: {
  route: RouteProp<DrawerStackParamList, keyof DrawerStackParamList>;
}) => {
  const styles = useStyles();

  return (
    <View>
      <Text style={styles.text}>{DrawerStackScreens[route.name]}</Text>
    </View>
  );
};
