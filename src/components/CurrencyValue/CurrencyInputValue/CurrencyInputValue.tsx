import React, { useContext, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { CancelButton } from 'components/common/CancelButton';
import { CountryFlag } from 'components/common/CountryFlag/CountryFlag';
import { ThemeContext } from 'context/ThemeProvider/ThemeProvider';

import {
  useConvertedValues,
  useCurrencyInputHandlers,
  useFormattedValue,
} from './CurrencyInputValue.hooks';
import { Props } from './CurrencyInputValue.types';

import { useStyles } from './CurrencyInputValue.styles';

export const CurrencyInputValue: React.FC<Props> = ({
  currencyCode,
  focusedCurrencyName,
  setFocusedCurrencyName,
  setFocusedCurrencyValue,
  focusedCurrencyValue,
  course,
  focusedCurrencyCourse,
}) => {
  const { themeColors } = useContext(ThemeContext);
  const styles = useStyles();

  const inputRef = useRef(null);

  const [value, setValue] = useState(null);
  const isFocused = focusedCurrencyName === currencyCode;

  const [onChangeTextHandler, onFocusHandler, containerOnPressHandler] =
    useCurrencyInputHandlers(
      setFocusedCurrencyValue,
      setValue,
      setFocusedCurrencyName,
      currencyCode,
      inputRef,
    );

  const caclulatedValue = useConvertedValues(
    isFocused,
    value,
    focusedCurrencyValue,
    course,
    focusedCurrencyCourse,
  );

  const formattedValue = useFormattedValue(caclulatedValue);

  return (
    <View
      style={
        isFocused
          ? [styles.containerWrapper, styles.containerWrapperFocused]
          : styles.containerWrapper
      }>
      <Pressable
        key={currencyCode}
        onPress={containerOnPressHandler}
        android_ripple={{ borderless: false }}
        style={styles.container}>
        <Text
          style={
            isFocused ? [styles.title, styles.titleFocused] : styles.title
          }>
          {currencyCode}
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={themeColors.FONT_COLOR_FADED}
          value={formattedValue}
          onChangeText={onChangeTextHandler}
          onFocus={() => onFocusHandler(caclulatedValue)}
          ref={inputRef}
          keyboardType="numeric"
          contextMenuHidden={true}
          placeholder="0"
          maxLength={14}
        />
        {isFocused && !!caclulatedValue && (
          <CancelButton onPress={onChangeTextHandler} />
        )}
        <CountryFlag currencyCode={currencyCode} size={30} />
      </Pressable>
    </View>
  );
};
