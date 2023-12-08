import React from 'react';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
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
    <ButtonWithIPadOSInteraction
      onPress={onPress}
      containerStyle={styles.iconContainer}>
      <Icon size={size} />
    </ButtonWithIPadOSInteraction>
  );
};
