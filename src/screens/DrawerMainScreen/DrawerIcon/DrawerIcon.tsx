import React from 'react';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { TSVGIcon } from 'types';

import { useStyles } from './DrawerIcon.styles';

type TDrawerIcon = (props: {
  onPress: () => void;
  Icon: TSVGIcon;
  size: number;
  color?: string;
  withRipple?: boolean;
}) => JSX.Element;

export const DrawerIcon: TDrawerIcon = ({
  onPress,
  Icon,
  size,
  color,
  withRipple = true,
}) => {
  const styles = useStyles(color);

  return (
    <ButtonWithIPadOSInteraction
      onPress={onPress}
      withRipple={withRipple}
      containerStyle={styles.iconContainer}>
      <Icon size={size} />
    </ButtonWithIPadOSInteraction>
  );
};
