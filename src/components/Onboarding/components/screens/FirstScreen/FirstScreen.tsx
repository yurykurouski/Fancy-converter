import React from 'react';
import { Text, View } from 'react-native';
import AppIcon from 'assets/icons/icon_svg.svg';
import { SCREEN_WIDTH } from 'constants/constants';

import { useStyles } from '../../../../Onboarding';

import { screenStyles } from './FirstScreen.styles';

export const FirstScreen = () => {
  const styles = useStyles();

  return (
    <View style={{ width: SCREEN_WIDTH }}>
      <View style={screenStyles.iconBack}>
        <AppIcon
          width="160"
          height="160"
          style={{
            alignSelf: 'center',
          }}
        />
      </View>
      <Text style={[styles.mainText, styles.title]}>
        HEY!{'\n'}
        Let's take a brief overview
      </Text>
    </View>
  );
};
