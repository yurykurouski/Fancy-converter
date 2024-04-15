import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { l } from 'resources/localization';
import { selectedCurrenciesStore } from 'store/valtio/selectedCurrenciesStore';
import { EAvailableFiatNames } from 'types';
import { useSnapshot } from 'valtio';

import { CurrencyItem } from './components/CurrencyItem';

import { useStyles } from './FourthScreen.styles';
import { useCommonOnboardingStyles } from 'components/Onboarding/Onboarding.styles';

type TProps = {
  windowWidth: number;
};

export const FourthScreen = ({ windowWidth }: TProps) => {
  const styles = useStyles(windowWidth);
  const textStyles = useCommonOnboardingStyles();

  const { currencies } = useSnapshot(selectedCurrenciesStore);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.currs}>
          <Text style={textStyles.mainText}>
            {l['onboarding_fourth-screen_title']}
          </Text>
          {Object.keys(currencies).map(currencyCode => (
            <CurrencyItem
              key={currencyCode}
              currencyCode={currencyCode as EAvailableFiatNames}
              currencyName={l[currencyCode as EAvailableFiatNames]}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
