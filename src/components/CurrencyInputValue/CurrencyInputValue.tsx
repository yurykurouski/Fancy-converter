import React, { FC, useMemo, useRef } from 'react';
import { Pressable, Text, TextInput } from 'react-native';
import Animated, { FadeInRight, FadeOutRight } from 'react-native-reanimated';
import { Colors } from 'assets/colors';
import { CancelButton } from 'components/common/CancelButton';
import { DEFAULT_ANIMATION_DURATION } from 'constants/index';
import { editModeActions, editModeStore } from 'store/editModeStore';
import { exchangeRatesStore } from 'store/exchangeRateStore';
import { favoriteCurrencyStore } from 'store/favoriteCurrenciesStore';
import {
  focusedCurrencyActions,
  focusedCurrencyStore,
} from 'store/focusedCurrencyStore';
import {
  selectedForEditActions,
  selectedForEditStore,
} from 'store/selectedForEditStore';
import { TAvailableCurrenciesNames } from 'types';
import { useSnapshot } from 'valtio';

import { CurrencyInputIcon } from './CurrencyInputIcon/CurrencyInputIcon';
import {
  useConvertedValues,
  useCurrencyInputHandlers,
  useFormattedValue,
  useOnContainerPress,
} from './CurrencyInputValue.hooks';
import { Props } from './CurrencyInputValue.types';

import { useStyles } from './CurrencyInputValue.styles';

const useMemoizedValues = (currencyCode: TAvailableCurrenciesNames) => {
  const { exchangeRates } = useSnapshot(exchangeRatesStore);
  const { focusedCurrencyName } = useSnapshot(focusedCurrencyStore);

  return useMemo(
    () => ({
      focusedCurrencyRate:
        focusedCurrencyName && exchangeRates?.[focusedCurrencyName],
      isFocused: focusedCurrencyName === currencyCode,
      rate: exchangeRates?.[currencyCode],
    }),
    [currencyCode, exchangeRates, focusedCurrencyName],
  );
};

export const CurrencyInputValue: FC<Props> = React.memo(
  ({ currencyCode, selectedAmountShared }) => {
    const { isInEditMode } = useSnapshot(editModeStore);
    const { selectedCurrencies } = useSnapshot(selectedForEditStore);
    const { favoriteCurrencies } = useSnapshot(favoriteCurrencyStore);

    const { setFocusedCurrencyValue, setFocusedCurrencyName } =
      focusedCurrencyActions;

    const { focusedCurrencyRate, isFocused, rate } =
      useMemoizedValues(currencyCode);

    const styles = useStyles();

    const inputRef = useRef<TextInput>(null);

    const isSelectedForEdit = !!selectedCurrencies[currencyCode];

    const { onChangeTextHandler, onFocusHandler, containerOnPressHandler } =
      useCurrencyInputHandlers({
        setFocusedCurrencyValue,
        setFocusedCurrencyName,
        currencyCode,
        inputRef,
        isInEditMode,
      });

    const onContainerPress = useOnContainerPress({
      isInEditMode,
      currencyCode,
      addToCurrInEdit: selectedForEditActions.addToSelected,
      selectedCurrenciesInEdit: selectedCurrencies,
      removeFromSelectedCurrenciesInEdit: selectedForEditActions.clearSelected,
      selectedInEditAmount: selectedAmountShared,
      setEditMode: editModeActions.setEditMode,
    });

    const calculatedValue = useConvertedValues(
      isFocused,
      rate,
      focusedCurrencyRate,
    );

    const formattedValue = useFormattedValue(calculatedValue);

    return (
      <Animated.View
        style={[
          styles.containerWrapper,
          isFocused && !isInEditMode && styles.containerWrapperFocused,
        ]}>
        <Pressable
          onPress={onContainerPress}
          style={styles.container}
          pointerEvents={isInEditMode ? 'box-only' : 'box-none'}>
          <Pressable onPress={containerOnPressHandler}>
            <Text
              style={[
                styles.title,
                ((isFocused && !isInEditMode) ||
                  (isInEditMode && isSelectedForEdit)) &&
                  styles.titleFocused,
              ]}>
              {currencyCode}
            </Text>
          </Pressable>
          <TextInput
            style={styles.input}
            placeholderTextColor={Colors?.FONT_COLOR_FADED}
            value={formattedValue}
            onChangeText={onChangeTextHandler}
            onFocus={() => onFocusHandler(calculatedValue)}
            ref={inputRef}
            keyboardType="numeric"
            contextMenuHidden
            placeholder="0"
            maxLength={14}
          />
          {isFocused && !!calculatedValue && !isInEditMode && (
            <AnimatedCancelIcon
              onPress={onChangeTextHandler}
              additionalStyle={styles.cancelBtnAdditional}
              entering={FadeInRight.duration(DEFAULT_ANIMATION_DURATION)}
              exiting={FadeOutRight.duration(DEFAULT_ANIMATION_DURATION)}
            />
          )}
          <CurrencyInputIcon
            isSelectedForEdit={isSelectedForEdit}
            currencyCode={currencyCode}
            bookmark={!!favoriteCurrencies[currencyCode]}
          />
        </Pressable>
      </Animated.View>
    );
  },
);

const AnimatedCancelIcon = Animated.createAnimatedComponent(CancelButton);
