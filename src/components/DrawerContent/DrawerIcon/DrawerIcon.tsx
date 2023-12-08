import React from 'react';
import { Pressable } from 'react-native';
import { TSVGIcon } from 'types';

import { useStyles } from './DrawerIcon.styles';

type DrawerIcon = (props: {
  onPress: () => void;
  Icon: TSVGIcon;
  size: number;
  color?: string;
}) => JSX.Element;

export const DrawerIcon: DrawerIcon = ({ onPress, Icon, size, color }) => {
  const styles = useStyles(color);

  return (
    <Pressable onPress={onPress} style={styles.iconContainer}>
      <Icon size={size} />
    </Pressable>
  );
};
