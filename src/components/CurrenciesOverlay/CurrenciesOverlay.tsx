import React, { useContext, useState } from 'react';
import { ScrollView, View } from 'react-native';

import avaliableCurrencies from '../../resources/avaliable-currencies.json';
import { HorisontalDivider } from '../common/HorisontalDivider';
import { SubmitButton } from '../common/SubmitButton';
import { SelectedCurrenciesContext } from '../Context/SelectedCurrenciesContext';
import { useCurrenciesListToArray } from '../CurrencySelector/CurrencySelector.hooks';
import { styles } from './CurrenciesOverlay.styles';
import { CurrencySelectorValue } from './CurrencySelectorValue';

export const CurrenciesOverlay = ({ setIsModal }) => {
  const {
    selectedCurrenciesContext: { setSelectedCurrencies, selectedCurrencies },
  } = useContext(SelectedCurrenciesContext);

  const [modalSelectedCurrencies, setModalSelectedCurrencies] =
    useState(selectedCurrencies);

  const acceptButtonHandler = () => {
    setSelectedCurrencies(modalSelectedCurrencies);

    setIsModal(false);
  };

  const currenciesArray = useCurrenciesListToArray(avaliableCurrencies);

  return (
    <View style={styles.container}>
      <ScrollView>
        {currenciesArray.map(value => (
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
