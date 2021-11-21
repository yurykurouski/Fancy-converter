import React, { useRef, useState } from 'react';
import { Pressable, Text, TextInput } from 'react-native';

import { CountryFlag } from '../../CountryFlag';
import {
  useConvertedValues,
  useCurrencyInputHandlers,
} from './CurrencyInputValue.hooks';
import { styles } from './CurrencyInputValue.styles';
import { Props } from './CurrencyInputValue.types';

export const CurrencyInputValue: React.FC<Props> = ({
  currencyCode,
  focusedCurrencyName,
  setFocusedCurrencyName,
  setFocusedCurrencyValue,
  focusedCurrencyValue,
  course,
  focusedCurrencyCourse,
}) => {
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

  return (
    <Pressable
      key={currencyCode}
      onPress={containerOnPressHandler}
      style={
        isFocused
          ? [styles.container, styles.containerFocused]
          : styles.container
      }>
      <Text
        style={isFocused ? [styles.title, styles.titleFocused] : styles.title}>
        {currencyCode}
      </Text>
      <TextInput
        style={styles.input}
        value={caclulatedValue}
        onChangeText={onChangeTextHandler}
        onFocus={() => onFocusHandler(caclulatedValue)}
        ref={inputRef}
        keyboardType="number-pad"
        contextMenuHidden={true}
        placeholder="0"
      />
      <CountryFlag currencyCode={currencyCode} />
    </Pressable>
  );
};
