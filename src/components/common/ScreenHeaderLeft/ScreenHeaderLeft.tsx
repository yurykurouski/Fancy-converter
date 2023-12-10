import React from 'react';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RightArrowIcon } from 'assets/icons';

import { useStyles } from './ScreenHeaderLeft.styles';

export const ScreenHeaderLeft = React.memo(() => {
  const styles = useStyles();
  const { goBack } = useNavigation();

  return (
    <Pressable onPress={goBack} style={styles.container}>
      <View style={styles.iconContainer}>
        <RightArrowIcon size={26} />
      </View>
    </Pressable>
  );
});
