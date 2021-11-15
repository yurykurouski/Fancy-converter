import React, { useState, useCallback } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { styles } from './CurrencySelectorValue.styles';

export const CurrencySelectorValue = ({
  value,
  modalSelectedCurrencies,
  setModalSelectedCurrencies,
}) => {
  const currencyCode = Object.keys(value)[0];
  const { currencyName, id } = value[currencyCode];
  const [isActive, setIsActive] = useState(() =>
    modalSelectedCurrencies.includes(currencyCode),
  );

  const onPressHandler = useCallback(() => {
    if (isActive) {
      const filteredCurrenciesList = modalSelectedCurrencies.filter(
        code => code !== currencyCode,
      );
      setModalSelectedCurrencies(filteredCurrenciesList);
    } else {
      setModalSelectedCurrencies([...modalSelectedCurrencies, currencyCode]);
    }

    setIsActive(!isActive);
  }, [
    currencyCode,
    isActive,
    modalSelectedCurrencies,
    setModalSelectedCurrencies,
  ]);

  return (
    <TouchableOpacity
      key={id}
      style={styles.currencyBlock}
      onPress={onPressHandler}>
      <View>
        <Text style={styles.currencyCode}>{currencyCode}</Text>
        <Text style={styles.currencyName}>{currencyName}</Text>
      </View>
      <CheckBox value={isActive} onValueChange={onPressHandler} />
    </TouchableOpacity>
  );
};
