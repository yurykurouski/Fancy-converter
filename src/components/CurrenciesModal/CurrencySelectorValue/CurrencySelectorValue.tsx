import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { AvaliableCurrenciesInObject } from 'types/avaliable-currencies';

import { getCurrentThemeColors } from '../../../utils/getCurrentColorTheme';

const colors = getCurrentThemeColors();

import { styles } from './CurrencySelectorValue.styles';

type Props = {
  value: AvaliableCurrenciesInObject;
  modalSelectedCurrencies: string[] | [];
  setModalSelectedCurrencies: React.Dispatch<
    React.SetStateAction<string[] | []>
  >;
};

export const CurrencySelectorValue: React.FC<Props> = ({
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
      <BouncyCheckbox
        size={30}
        fillColor={colors.ACCENT_COLOR_LIGHTER}
        onPress={onPressHandler}
        isChecked={isActive}
        disableBuiltInState
        bounceFriction={4}
      />
    </TouchableOpacity>
  );
};
