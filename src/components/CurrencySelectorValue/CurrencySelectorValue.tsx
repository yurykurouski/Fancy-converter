import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CheckIcon } from 'assets/icons';
import { AnimatedFlipIcon } from 'components/AnimatedFlipIcon';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { CountryFlag } from 'components/common/CountryFlag';
import { useSetSelectedCurrencies } from 'hooks';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';

import { useOnPressHandler } from './CurrencySelectorValue.hooks';
import { TProps } from './CurrencySelectorValue.types';

import { useStyles } from './CurrencySelectorValue.styles';

export const CurrencySelectorValue: FC<TProps> = React.memo(
  ({ currencyCode }) => {
    const styles = useStyles();

    const { colorScheme } = useSelector(selectColorSchemeState);
    const { selectedCurrencies } = useSelector(selectSelectedCurrencies);

    const setSelectedCurrencies = useSetSelectedCurrencies();

    const isActive = selectedCurrencies.includes(currencyCode);

    const onPressHandler = useOnPressHandler(
      isActive,
      selectedCurrencies,
      currencyCode,
      setSelectedCurrencies,
    );

    const currencyName = l[currencyCode];

    return (
      <ButtonWithIPadOSInteraction
        hitSlop={5}
        containerStyle={styles.currencyBlock}
        onPress={onPressHandler}>
        <View style={styles.currencyInfoWrapper}>
          <CountryFlag currencyCode={currencyCode} size={36} />
          <View style={styles.currencyCodeNameWrapper}>
            <Text style={styles.currencyCode}>{currencyCode}</Text>
            <Text style={styles.currencyName}>{currencyName}</Text>
          </View>
        </View>
        <AnimatedFlipIcon
          nextState={isActive}
          DefaultIcon={<View style={styles.deselectedIcon} />}
          NextIcon={
            <CheckIcon
              size={30}
              color={THEME_COLORS[colorScheme!].ACCENT_COLOR_LIGHTER}
            />
          }
        />
      </ButtonWithIPadOSInteraction>
    );
  },
);
