import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { l } from 'resources/localization';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { EAvailableFiatNames } from 'types';

import { CurrencyItem } from './components/CurrencyItem';

import { useStyles } from './FourthScreen.styles';
import { useCommonOnboardingStyles } from 'components/Onboarding/Onboarding.styles';

type TProps = {
  windowWidth: number;
};

export const FourthScreen = ({ windowWidth }: TProps) => {
  const styles = useStyles(windowWidth);
  const textStyles = useCommonOnboardingStyles();

  const [locationCurrency] = useState('');

  const { currencies } = useSelector(selectSelectedCurrencies);
  // const addSelected = useAddSelected();

  // const getLocalCurrency = useGetLocalCurrency(
  //   addSelected,
  //   setLocationCurrency,
  // );

  // useEffect(() => {
  //   if (currentPage === 3 && !locationCurrency) {
  //     getLocalCurrency();
  //   }
  // }, [locationCurrency, currentPage, getLocalCurrency]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={[textStyles.mainText, styles.title]}>
          {l['onboarding_fourth-screen_title']}
        </Text>
        {Object.keys(currencies).map(
          currencyCode =>
            currencyCode !== locationCurrency && (
              <CurrencyItem
                key={currencyCode}
                currencyCode={currencyCode as EAvailableFiatNames}
                currencyName={l[currencyCode as EAvailableFiatNames]}
              />
            ),
        )}

        {locationCurrency && (
          <>
            <Text style={textStyles.mainText}>
              {l['onboarding_fourth-screen_second-title']}
            </Text>
            <CurrencyItem
              currencyCode={locationCurrency as EAvailableFiatNames}
              currencyName={l[locationCurrency as EAvailableFiatNames]}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};
