import React, { FC, useRef } from 'react';
import { Pressable, Text, TextInput } from 'react-native';
import Animated, {
  FadeInRight,
  FadeOutRight,
  SlideOutRight,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CancelButton } from 'components/common/CancelButton';
import { DEFAULT_ANIMATION_DURATION } from 'constants/constants';
import { useFilteredCourseBySelectedCurrencies } from 'hooks';
import {
  useSetFocusedCurrencyName,
  useSetFocusedCurrencyValue,
} from 'hooks/store/FocusedCurrency';
import {
  useAddToSelectedCurrenciesInEdit,
  useRemoveFromSelectedCurrenciesInEdit,
  useSetSelectedCurrEditMode,
} from 'hooks/store/SelectedCurrencies';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectFavoriteCurrencies } from 'store/favoriteCurrencies/selectors';
import { selectFocusedCurrency } from 'store/focusedCurrency/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';

import { CurrencyInputIcon } from './CurrencyInputIcon/CurrencyInputIcon';
import {
  useConvertedValues,
  useCurrencyInputHandlers,
  useFormattedValue,
  useHandleLongPress,
  useOnContainerPress,
} from './CurrencyInputValue.hooks';
import { Props } from './CurrencyInputValue.types';

import { useStyles } from './CurrencyInputValue.styles';

export const CurrencyInputValue: FC<Props> = React.memo(({ currencyCode }) => {
  const { colorScheme } = useSelector(selectColorSchemeState);
  const { exchangeCourses } = useSelector(selectExchangeCourses);
  const { selectedCurrencies, isInEditMode, selectedCurrenciesInEdit } =
    useSelector(selectSelectedCurrencies);
  const { focusedCurrencyName, focusedCurrencyValue } = useSelector(
    selectFocusedCurrency,
  );
  const { favoriteCurrencies } = useSelector(selectFavoriteCurrencies);

  const setSelectedCurrInEditMode = useSetSelectedCurrEditMode();
  const addToCurrInEdit = useAddToSelectedCurrenciesInEdit();
  const removeFromSelectedCurrenciesInEdit =
    useRemoveFromSelectedCurrenciesInEdit();

  const setFocusedCurrencyValue = useSetFocusedCurrencyValue();
  const setFocusedCurrencyName = useSetFocusedCurrencyName();

  const styles = useStyles();

  const inputRef = useRef<TextInput>(null);

  const selectedCourses = useFilteredCourseBySelectedCurrencies(
    exchangeCourses,
    selectedCurrencies,
  );

  const course = selectedCourses?.[currencyCode];
  const focusedCurrencyCourse =
    focusedCurrencyName && selectedCourses?.[focusedCurrencyName];

  const isFocused = focusedCurrencyName === currencyCode;
  const isSelectedForEdit: boolean =
    selectedCurrenciesInEdit.includes(currencyCode);

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
    selectedCurrenciesInEdit,
    removeFromSelectedCurrenciesInEdit,
    setSelectedCurrInEditMode,
  });

  const calculatedValue = useConvertedValues(
    isFocused,
    focusedCurrencyValue,
    course,
    focusedCurrencyCourse,
  );

  const formattedValue = useFormattedValue(calculatedValue);

  const handleLongPress = useHandleLongPress({
    isInEditMode,
    setSelectedCurrInEditMode,
    addToCurrInEdit,
    currencyCode,
  });

  return (
    <Animated.View
      style={[
        styles.containerWrapper,
        isFocused && styles.containerWrapperFocused,
      ]}
      exiting={SlideOutRight.duration(DEFAULT_ANIMATION_DURATION)}>
      <Pressable
        onPress={onContainerPress}
        style={styles.container}
        pointerEvents={isInEditMode ? 'box-only' : 'box-none'}>
        <Pressable
          onLongPress={handleLongPress}
          onPress={containerOnPressHandler}>
          <Text
            style={[
              styles.title,
              (isFocused || isSelectedForEdit) && styles.titleFocused,
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
