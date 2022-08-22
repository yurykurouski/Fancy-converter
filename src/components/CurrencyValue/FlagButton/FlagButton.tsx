import React, { useContext, useEffect } from 'react';
import { Animated } from 'react-native';
import { CancelButton } from 'components/common/CancelButton';
import { CountryFlag } from 'components/common/CountryFlag';
import { NotificationContext, SelectedCurrenciesContext } from 'context';

import {
  useFlipImageAnimation,
  useHandleDeletePress,
} from './FlagButton.hooks';
import { Props } from './FlagButton.types';

export const FlagButton = React.memo<Props>(
  ({ isReadyToDelete, currencyCode, setIsReadyToDelete }) => {
    const {
      selectedCurrenciesContext: { selectedCurrencies, setSelectedCurrencies },
    } = useContext(SelectedCurrenciesContext);
    const startNotification = useContext(NotificationContext);

    const { flipImageAnimation, rotateYAnimatedStyle } =
      useFlipImageAnimation(isReadyToDelete);

    const handleDeletePress = useHandleDeletePress({
      setIsReadyToDelete,
      selectedCurrencies,
      currencyCode,
      setSelectedCurrencies,
      startNotification,
    });

    useEffect(() => {
      flipImageAnimation();
    }, [currencyCode, isReadyToDelete, flipImageAnimation]);

    return (
      <Animated.View style={rotateYAnimatedStyle}>
        {isReadyToDelete ? (
          <CancelButton size={30} onPress={handleDeletePress} />
        ) : (
          <CountryFlag currencyCode={currencyCode} size={30} />
        )}
      </Animated.View>
    );
  },
);
