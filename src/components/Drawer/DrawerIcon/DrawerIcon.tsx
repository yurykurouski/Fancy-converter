import React from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';

import { styles } from './DrawerIcon.styles';

type DrawerIcon = (props: {
  onPress: () => void;
  icon: ImageSourcePropType;
}) => JSX.Element;

export const DrawerIcon: DrawerIcon = ({ onPress, icon }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={icon} style={styles.drawerIcon} />
    </Pressable>
  );
};
