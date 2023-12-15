import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RightArrowIcon } from 'assets/icons';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { ICON_BUTTON_SIZE } from 'constants/index';

import { useStyles } from './ScreenHeaderLeft.styles';

export const ScreenHeaderLeft = () => {
  const styles = useStyles();
  const { goBack } = useNavigation();

  return (
    <ButtonWithIPadOSInteraction
      onPress={goBack}
      containerStyle={styles.iconContainer}>
      <RightArrowIcon size={ICON_BUTTON_SIZE} />
    </ButtonWithIPadOSInteraction>
  );
};
