import React, { FC, useMemo, useRef } from 'react';
import { Pressable, Text, TextInput } from 'react-native';
import Animated, { FadeInRight, FadeOutRight } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CancelButton } from 'components/common/CancelButton';
import { DEFAULT_ANIMATION_DURATION } from 'constants/constants';
import {
  useSetFocusedCurrencyName,
  useSetFocusedCurrencyValue,
} from 'hooks/store/FocusedCurrency';
import {
  useAddToSelectedCurrenciesInEdit,
  useRemoveFromSelectedCurrenciesInEdit,
} from 'hooks/store/SelectedCurrencies';
import { useSetEditMode } from 'hooks/store/UIStatus';
import { selectEditMode } from 'store/editMode/selectors';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectFavoriteCurrencies } from 'store/favoriteCurrencies/selectors';
import { selectFocusedCurrency } from 'store/focusedCurrency/selectors';
import { selectSelectedInEdit } from 'store/selectedForEdit/selectors';
import { selectUIStatus } from 'store/ui/selectors';
import { EAvailableCryptoNames, EAvailableFiatNames } from 'types';

import { CurrencyInputIcon } from './CurrencyInputIcon/CurrencyInputIcon';
import {
  useConvertedValues,
  useCurrencyInputHandlers,
  useFormattedValue,
  useOnContainerPress,
} from './CurrencyInputValue.hooks';
import { Props } from './CurrencyInputValue.types';

import { useStyles } from './CurrencyInputValue.styles';

const useMemoizedValues = (
  currencyCode: EAvailableFiatNames | EAvailableCryptoNames,
) => {
  const { exchangeCourses } = useSelector(selectExchangeCourses);
  const { focusedCurrencyName } = useSelector(selectFocusedCurrency);

  return useMemo(
    () => ({
      focusedCurrencyRate:
        focusedCurrencyName && exchangeCourses?.[focusedCurrencyName],
      isFocused: focusedCurrencyName === currencyCode,
      rate: exchangeCourses?.[currencyCode],
    }),
    [currencyCode, exchangeCourses, focusedCurrencyName],
  );
};

export const CurrencyInputValue: FC<Props> = React.memo(({ currencyCode }) => {
  const { colorScheme } = useSelector(selectUIStatus);
  const { isInEditMode } = useSelector(selectEditMode);
  const { selectedCurrencies, selectedAmount } =
    useSelector(selectSelectedInEdit);
  const { favoriteCurrencies } = useSelector(selectFavoriteCurrencies);

  const addToCurrInEdit = useAddToSelectedCurrenciesInEdit();
  const removeFromSelectedCurrenciesInEdit =
    useRemoveFromSelectedCurrenciesInEdit();

  const setFocusedCurrencyValue = useSetFocusedCurrencyValue();
  const setFocusedCurrencyName = useSetFocusedCurrencyName();
  const setEditMode = useSetEditMode();

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
    addToCurrInEdit,
    selectedCurrenciesInEdit: selectedCurrencies,
    removeFromSelectedCurrenciesInEdit,
    selectedInEditAmount: selectedAmount,
    setEditMode,
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
      ]}
      //NOTE: removed for now
      // layout={SequencedTransition}
      /* exiting={FadeOut.duration(DEFAULT_ANIMATION_DURATION)} */
    >
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
          placeholderTextColor={THEME_COLORS[colorScheme!].FONT_COLOR_FADED}
          value={formattedValue}
          onChangeText={onChangeTextHandler}
          onFocus={() => onFocusHandler(calculatedValue)}
          ref={inputRef}
          keyboardType="numeric"
          keyboardAppearance={colorScheme!}
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
});

const AnimatedCancelIcon = Animated.createAnimatedComponent(CancelButton);
