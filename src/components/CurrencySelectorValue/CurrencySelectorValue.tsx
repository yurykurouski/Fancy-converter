import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
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

    const isActive = (modalSelectedCurrencies as string[]).includes(
      currencyCode,
    );

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
          <BouncyCheckbox
            size={30}
            fillColor={THEME_COLORS[colorScheme].ACCENT_COLOR_LIGHTER}
            onPress={onPressHandler}
            isChecked={isActive}
            disableBuiltInState
            bounceFriction={4}
            style={styles.checkBoxContainer}
          />
        </Pressable>
      </View>
    );
  },
);
