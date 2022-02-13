import React from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';

import { styles } from './DrawerIcon.styles';

type Props = {
  onPress: () => void;
  icon: ImageSourcePropType;
};

export const DrawerIcon = ({ onPress, icon }: Props): JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <Image source={icon} style={styles.drawerIcon} />
    </Pressable>
  );
};
