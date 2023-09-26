import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRenderHandler } from 'components/CurrenciesBottomSheet/hooks';
import { l } from 'resources/localization';

import { useStyles as useTextStyles } from '../../../../Onboarding';

import { QUANTITY_CONFIG } from './SecondScreen.consts';
import { Selector } from './Selector';

import { useStyles } from './SecondScreen.styles';

export const SecondScreen = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  const Handle = useRenderHandler();

  const screenTitle = l['onboarding_second-screen_title'];

  return (
    <View style={styles.container}>
      <Text style={[textStyles.mainText, textStyles.title]}>{screenTitle}</Text>
      <View style={styles.backgroundContainer}>
        <Handle />
        <ScrollView removeClippedSubviews>
          <View style={styles.separatorContainer}>
            <View style={styles.separatorBackground}>
              <View style={styles.separatorItem} />
            </View>
          </View>
          {QUANTITY_CONFIG.map(el => (
            <Selector key={el} />
          ))}
          <View style={styles.separatorContainer}>
            <View style={styles.separatorBackground}>
              <View style={styles.separatorItem} />
            </View>
          </View>
          {QUANTITY_CONFIG.map(el => (
            <Selector key={el} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
