import React, { FC, useCallback } from 'react';
import { Text, View } from 'react-native';
import { Colors } from 'assets/colors';
import { BookmarkIcon, CheckIcon } from 'assets/icons';
import { AnimatedFlipIcon } from 'components/AnimatedFlipIcon';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { CountryFlag } from 'components/common/CountryFlag';
import { l } from 'resources/localization';
import { favoriteCurrencyStore } from 'store/favoriteCurrenciesStore';
import { favoriteCurrencyActions } from 'store/favoriteCurrenciesStore/favoriteCurrenciesStore';
import {
  selectedCurrenciesActions,
  selectedCurrenciesStore,
} from 'store/selectedCurrenciesStore';
import { useSnapshot } from 'valtio';

import { useOnPressHandler } from './CurrencySelectorValue.hooks';
import { TProps } from './CurrencySelectorValue.types';

import { useStyles } from './CurrencySelectorValue.styles';

export const CurrencySelectorValue: FC<TProps> = React.memo(
  ({ currencyCode }) => {
    const styles = useStyles();

    const { activeCurrencyType, currencies } = useSnapshot(
      selectedCurrenciesStore,
    );
    const { favoriteCurrencies } = useSnapshot(favoriteCurrencyStore);

    const isActive = currencies.hasOwnProperty(currencyCode);
    const isFavorite = !!favoriteCurrencies[currencyCode];

    const onPressHandler = useOnPressHandler(
      isActive,
      currencyCode,
      selectedCurrenciesActions.removeSelectedCurr,
      selectedCurrenciesActions.addSelectedCurr,
    );

    const onLongPress = useCallback(() => {
      if (isFavorite) {
        favoriteCurrencyActions.removeFavoriteCurrency(currencyCode);
      } else {
        favoriteCurrencyActions.setFavoriteCurrency(
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
          NextIcon={<CheckIcon size={30} color={Colors?.FONT_PRIMARY_COLOR} />}
        />
      </ButtonWithIPadOSInteraction>
    );
  },
);
