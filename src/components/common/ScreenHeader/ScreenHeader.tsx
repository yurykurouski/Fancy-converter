import React from 'react';
import { Animated, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { DrawerStackParamList } from 'navigation/DrawerStack/DrawerStack.routes';

import { ScreenHeaderLeft } from '../ScreenHeaderLeft';
import { ScreenHeaderTitle } from '../ScreenHeaderTitle';

import { useStyles } from './ScreenHeader.styles';

export const ScreenHeader = ({
  route,
}: {
  route: RouteProp<DrawerStackParamList, keyof DrawerStackParamList>;
}) => {
  const styles = useStyles();

  return (
    <Animated.View style={styles.wrapper}>
      <View style={styles.container}>
        <ScreenHeaderLeft />
        <ScreenHeaderTitle children={route.name} />
      </View>
    </Animated.View>
  );
};
