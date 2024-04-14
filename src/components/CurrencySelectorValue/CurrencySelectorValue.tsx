import React, { FC, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { BookmarkIcon, CheckIcon } from 'assets/icons';
import { AnimatedFlipIcon } from 'components/AnimatedFlipIcon';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { CountryFlag } from 'components/common/CountryFlag';
import {
  useAddSelected,
  useRemoveSelected,
} from 'hooks/store/SelectedCurrencies';
import { l } from 'resources/localization';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { colorSchemeStore } from 'store/valtio/colorSchemeStore';
import { focusedCurrencyStore } from 'store/valtio/favoriteCurrenciesStore';
import { focusedCurrencyActions } from 'store/valtio/favoriteCurrenciesStore/favoriteCurrenciesStore';
import { useSnapshot } from 'valtio';

import { useOnPressHandler } from './CurrencySelectorValue.hooks';
import { TProps } from './CurrencySelectorValue.types';

import { useStyles } from './CurrencySelectorValue.styles';

export const CurrencySelectorValue: FC<TProps> = React.memo(
  ({ currencyCode }) => {
    const styles = useStyles();

    const { colorScheme } = useSnapshot(colorSchemeStore);
    const { activeCurrencyType, currencies } = useSelector(
      selectSelectedCurrencies,
    );
    const { favoriteCurrencies } = useSnapshot(focusedCurrencyStore);

    const removeSelected = useRemoveSelected();
    const addSelected = useAddSelected();

    const isActive = currencies.hasOwnProperty(currencyCode);
    const isFavorite = !!favoriteCurrencies[currencyCode];

    const onPressHandler = useOnPressHandler(
      isActive,
      currencyCode,
      removeSelected,
      addSelected,
    );

    const onLongPress = useCallback(() => {
      if (isFavorite) {
        focusedCurrencyActions.removeFavoriteCurrency(currencyCode);
      } else {
        focusedCurrencyActions.setFavoriteCurrency(
          currencyCode,
          activeCurrencyType,
        );
      }
    }, [activeCurrencyType, currencyCode, isFavorite]);

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
