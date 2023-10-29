import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Vibration } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { BookmarkIcon, CheckIcon } from 'assets/icons';
import { AnimatedFlipIcon } from 'components/AnimatedFlipIcon';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { CountryFlag } from 'components/common/CountryFlag';
import { useSetSelectedCurrencies } from 'hooks';
import {
  useRemoveFavoriteCurrency,
  useSetFavoriteCurrency,
} from 'hooks/store/FavoriteCurrencies';
import { l } from 'resources/localization';
import { selectFavoriteCurrencies } from 'store/favoriteCurrencies/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { selectColorSchemeState } from 'store/ui/selectors';

import { useOnPressHandler } from './CurrencySelectorValue.hooks';
import { TProps } from './CurrencySelectorValue.types';

import { useStyles } from './CurrencySelectorValue.styles';

export const CurrencySelectorValue: FC<TProps> = React.memo(
  ({ currencyCode }) => {
    const styles = useStyles();

    const { colorScheme } = useSelector(selectColorSchemeState);
    const { selectedCurrencies, activeCurrencyType } = useSelector(
      selectSelectedCurrencies,
    );
    const { favoriteCurrencies } = useSelector(selectFavoriteCurrencies);

    const setSelectedCurrencies = useSetSelectedCurrencies();
    const setFavoriteCurrency = useSetFavoriteCurrency();
    const removeFavCurrency = useRemoveFavoriteCurrency();

    const isActive = selectedCurrencies.includes(currencyCode);
    const isFavorite = !!favoriteCurrencies[currencyCode];

    const onPressHandler = useOnPressHandler(
      isActive,
      selectedCurrencies,
      currencyCode,
      setSelectedCurrencies,
    );

    const onLongPress = () => {
      Vibration.vibrate(1);
      if (isFavorite) {
        removeFavCurrency(currencyCode);
      } else {
        setFavoriteCurrency(currencyCode, activeCurrencyType);
      }
    };

    const currencyName = l[currencyCode];

    return (
      <ButtonWithIPadOSInteraction
        hitSlop={5}
        containerStyle={styles.currencyBlock}
        onLongPress={onLongPress}
        onPress={onPressHandler}>
        <View style={styles.currencyInfoWrapper}>
          <CountryFlag currencyCode={currencyCode} size={36} />
          <View style={styles.currencyCodeNameWrapper}>
            <View style={styles.currencyCodeContainer}>
              <Text style={styles.currencyCode}>{currencyCode}</Text>
              {isFavorite && <BookmarkIcon size={15} />}
            </View>
            <Text style={styles.currencyName}>{currencyName}</Text>
          </View>
        </View>
        <AnimatedFlipIcon
          nextState={isActive}
          DefaultIcon={<View style={styles.deselectedIcon} />}
          NextIcon={
            <CheckIcon
              size={30}
              color={THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
            />
          }
        />
      </ButtonWithIPadOSInteraction>
    );
  },
);
