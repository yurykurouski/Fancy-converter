import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from '../CurrencyValue.styles';

export const CurrencyInputValue = ({ currencyCode }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

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
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType="number-pad"
        contextMenuHidden={true}
      />
    </View>
  );
};
