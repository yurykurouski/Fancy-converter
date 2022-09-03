import React from 'react';
import { View } from 'react-native';
import { ONBOARDING_SCREENS } from 'components/Onboarding/Onboarding.consts';

import { StepIndicator } from '../StepIndicator';

import { styles } from './ProgressBar.styles';

export const ProgressBar = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <View style={styles.container}>
      {ONBOARDING_SCREENS.map((_, index) => (
        <StepIndicator key={index} isActive={index === activeIndex} />
      ))}
    </View>
  );
};
