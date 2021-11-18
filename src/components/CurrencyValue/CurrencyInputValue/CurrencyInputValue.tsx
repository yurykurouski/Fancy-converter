import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './CurrencyInputValue.styles';

export const CurrencyInputValue = ({
  currencyCode,
  focusedCurrency,
  setFocusedCurrency,
}) => {
  const [value, setValue] = useState('');
  const isFocused = focusedCurrency === currencyCode;

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
        onChange={({ nativeEvent: { text } }) => {
          setValue(text);
        }}
        onFocus={() => setFocusedCurrency(currencyCode)}
        keyboardType="number-pad"
        contextMenuHidden={true}
      />
    </View>
  );
};
