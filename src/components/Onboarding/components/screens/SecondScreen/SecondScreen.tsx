import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRenderHandler } from 'components/CurrenciesBottomSheet/hooks';
import { l } from 'resources/localization';

import { QUANTITY_CONFIG } from './SecondScreen.consts';
import { Selector } from './Selector';

import { useStyles } from './SecondScreen.styles';
import { useCommonOnboardingStyles } from 'components/Onboarding/Onboarding.styles';

export const SecondScreen = ({ windowWidth }: { windowWidth: number }) => {
  const styles = useStyles(windowWidth);
  const textStyles = useCommonOnboardingStyles();

  const Handle = useRenderHandler();

  const screenTitle = l['onboarding_second-screen_title'];
  const screenText = l['onboarding_second-screen_text'];

  return (
    <View style={styles.container}>
      <Text style={[textStyles.mainText, textStyles.title]}>{screenTitle}</Text>
      <Text style={[textStyles.mainText, textStyles.subTitle]}>
        {screenText}
      </Text>
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
