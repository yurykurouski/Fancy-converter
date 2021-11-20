import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import {
  useConvertedValues,
  useCurrencyInputHandlers,
} from './CurrencyInputValue.hooks';
import { styles } from './CurrencyInputValue.styles';

export const CurrencyInputValue = ({
  currencyCode,
  focusedCurrencyName,
  setFocusedCurrencyName,
  setFocusedCurrencyValue,
  focusedCurrencyValue,
  course,
  focusedCurrencyCourse,
}) => {
  const [value, setValue] = useState(null);
  const isFocused = focusedCurrencyName === currencyCode;

  const [onChangeTextHandler, onFocusHandler] = useCurrencyInputHandlers(
    setFocusedCurrencyValue,
    setValue,
    setFocusedCurrencyName,
    currencyCode,
  );

  const caclulatedValue = useConvertedValues(
    isFocused,
    value,
    focusedCurrencyValue,
    course,
    focusedCurrencyCourse,
  );

  return (
    <View
      key={currencyCode}
      style={
        isFocused
          ? [styles.container, styles.containerFocused]
          : styles.container
      }>
      <Text style={styles.title}>{currencyCode}</Text>
      <TextInput
        style={styles.input}
        value={caclulatedValue}
        onChangeText={onChangeTextHandler}
        onFocus={() => onFocusHandler(caclulatedValue)}
        keyboardType="number-pad"
        contextMenuHidden={true}
        placeholder="0"
      />
    </View>
  );
};
