import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RightArrowIcon } from 'assets/icons';
import { l } from 'resources/localization';

import { useStyles } from './ScreenHeaderLeft.styles';

export const ScreenHeaderLeft = React.memo(() => {
  const styles = useStyles();
  const { goBack } = useNavigation();

  return (
    <Pressable onPress={goBack} style={styles.container}>
      <View style={styles.iconContainer}>
        <RightArrowIcon size={26} />
      </View>
      <Text style={styles.backTitle}>{l.nav_back}</Text>
    </Pressable>
  );
});
