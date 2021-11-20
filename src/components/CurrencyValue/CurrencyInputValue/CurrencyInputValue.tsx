import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

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
      <Text
        style={isFocused ? [styles.title, styles.titleFocused] : styles.title}>
        {currencyCode}
      </Text>
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
