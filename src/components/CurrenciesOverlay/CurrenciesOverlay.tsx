import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { HorisontalDivider } from '../common/HorisontalDivider';
import { SubmitButton } from '../common/SubmitButton';
import { styles } from './CurrenciesOverlay.styles';
import { CurrencySelectorValue } from './CurrencySelectorValue';

export const CurrenciesOverlay = ({
  currenciesList,
  setIsModal,
  setSelectedCurrencies,
  selectedCurrencies,
}) => {
  const [modalSelectedCurrencies, setModalSelectedCurrencies] =
    useState(selectedCurrencies);

  const acceptButtonHandler = () => {
    setSelectedCurrencies(modalSelectedCurrencies);

    setIsModal(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {currenciesList.map(value => (
          <CurrencySelectorValue
            key={Object.keys(value)[0]}
            value={value}
            modalSelectedCurrencies={modalSelectedCurrencies}
            setModalSelectedCurrencies={setModalSelectedCurrencies}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonsWrapper}>
        <SubmitButton
          type="cancelButton"
          onPress={() => setIsModal(false)}
          title="Cancel"
        />
        <HorisontalDivider width={10} />
        <SubmitButton
          type="acceptButton"
          onPress={acceptButtonHandler}
          title="Accept"
        />
      </View>
    </View>
  );
};
