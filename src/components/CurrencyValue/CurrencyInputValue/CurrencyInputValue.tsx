import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { useCurrencyInputHandlers } from './CurrencyInputValue.hooks';
import { styles } from './CurrencyInputValue.styles';

export const CurrencyInputValue = ({
  currencyCode,
  focusedCurrencyName,
  setFocusedCurrencyName,
  setFocusedCurrencyValue,
  focusedCurrencyValue,
  course,
}) => {
  const [value, setValue] = useState('0');
  const isFocused = focusedCurrencyName === currencyCode;

  const [onChangeTextHandler, onFocusHandler, onBlurHandler] =
    useCurrencyInputHandlers(
      setFocusedCurrencyValue,
      setValue,
      value,
      setFocusedCurrencyName,
      currencyCode,
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
        value={value}
        onChangeText={onChangeTextHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        keyboardType="number-pad"
        contextMenuHidden={true}
      />
    </View>
  );
};
