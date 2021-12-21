import { CountryFlag } from 'components/common/CountryFlag';
import React, { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { AvaliableCurrenciesInObject } from 'types/avaliable-currencies';
import { getCurrentThemeColors } from 'utils';

const colors = getCurrentThemeColors();

import { styles } from './CurrencySelectorValue.styles';

type Props = {
  value: AvaliableCurrenciesInObject;
  modalSelectedCurrencies: string[] | [];
  setModalSelectedCurrencies: React.Dispatch<
    React.SetStateAction<string[] | []>
  >;
  isExpanded: boolean;
};

export const CurrencySelectorValue: React.FC<Props> = ({
  value,
  modalSelectedCurrencies,
  setModalSelectedCurrencies,
  isExpanded,
}) => {
  const currencyCode = Object.keys(value)[0];
  const { currencyName, id } = value[currencyCode];
  const [isActive, setIsActive] = useState(() =>
    (modalSelectedCurrencies as string[]).includes(currencyCode),
  );

  const onPressHandler = useCallback(() => {
    if (!isExpanded) return;
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
    isExpanded,
    modalSelectedCurrencies,
    setModalSelectedCurrencies,
  ]);

  return (
    <View style={styles.currencyBlockWrapper}>
      <Pressable
        key={id}
        style={styles.currencyBlock}
        onPress={onPressHandler}
        android_ripple={{ borderless: true }}>
        <View style={styles.currencyInfoWrapper}>
          <CountryFlag currencyCode={currencyCode} size={36} />
          <View style={styles.currencyCodeNameWrapper}>
            <Text style={styles.currencyCode}>{currencyCode}</Text>
            <Text style={styles.currencyName}>{currencyName}</Text>
          </View>
        </View>
        <BouncyCheckbox
          size={30}
          fillColor={colors.ACCENT_COLOR_LIGHTER}
          onPress={onPressHandler}
          isChecked={isActive}
          disableBuiltInState
          bounceFriction={4}
          style={styles.checkBoxContainer}
        />
      </Pressable>
    </View>
  );
};