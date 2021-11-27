import React, { useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { CancelButton } from '../../../components/common/CancelButton';
import { CountryFlag } from '../../common/CountryFlag/CountryFlag';
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
          value={caclulatedValue}
          onChangeText={onChangeTextHandler}
          onFocus={() => onFocusHandler(caclulatedValue)}
          ref={inputRef}
          keyboardType="numeric"
          contextMenuHidden={true}
          placeholder="0"
          maxLength={14}
        />
        {isFocused && <CancelButton onPress={onChangeTextHandler} />}
        <CountryFlag currencyCode={currencyCode} />
      </Pressable>
    </View>
  );
};
