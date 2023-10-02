import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CheckIcon } from 'assets/icons';
import { AnimatedFlipIcon } from 'components/AnimatedFlipIcon';
import { CountryFlag } from 'components/common/CountryFlag';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { useOnPressHandler } from './CurrencySelectorValue.hooks';
import { Props } from './CurrencySelectorValue.types';

import { useStyles } from './CurrencySelectorValue.styles';

export const CurrencySelectorValue: FC<Props> = React.memo(
  ({
    currencyCode,
    modalSelectedCurrencies,
    setModalSelectedCurrencies,
    isExpanded,
  }) => {
    const { colorScheme } = useSelector(selectColorSchemeState);
    const styles = useStyles();

    const isActive = modalSelectedCurrencies.includes(currencyCode);

    const onPressHandler = useOnPressHandler(
      isExpanded,
      isActive,
      modalSelectedCurrencies,
      currencyCode,
      setModalSelectedCurrencies,
    );

    const currencyName = l[currencyCode];

    return (
      <View style={styles.currencyBlockWrapper}>
        <Pressable
          key={currencyCode}
          style={styles.currencyBlock}
          onPress={onPressHandler}
          android_ripple={{ borderless: true }}>
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
        </Pressable>
      </View>
    );
  },
);
