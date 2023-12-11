import React from 'react';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RightArrowIcon } from 'assets/icons';
import { ICON_BUTTON_SIZE } from 'constants/index';

import { useStyles } from './ScreenHeaderLeft.styles';

export const ScreenHeaderLeft = () => {
  const styles = useStyles();
  const { goBack } = useNavigation();

  return (
    <Pressable onPress={goBack} style={styles.container}>
      <View style={styles.iconContainer}>
        <RightArrowIcon size={ICON_BUTTON_SIZE} />
      </View>
    </Pressable>
  );
};
