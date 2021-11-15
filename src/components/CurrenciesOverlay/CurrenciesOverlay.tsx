import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { HorisontalDivider } from '../common/HorisontalDivider';
import { SubmitButton } from '../common/SubmitButton';

import { styles } from './CurrenciesOverlay.styles';
import { CurrenciesCheckbox } from './CurrenciesCheckbox';

export const CurrenciesOverlay = ({
  currenciesList,
  setIsModal,
  setSelectedCurrencies,
  selectedCurrencies,
}) => {
  const [modalSelectedCurrencies, setModalSelectedCurrencies] = useState(selectedCurrencies);
  const acceptButtonHandler = () => {
    setSelectedCurrencies(modalSelectedCurrencies);

    setIsModal(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {currenciesList.map(value => {
          const currencyCode = Object.keys(value)[0];
          const { currencyName, id } = value[currencyCode];
          const isActive = selectedCurrencies.includes(currencyCode);

          return (
            <View key={id} style={styles.currencyBlock}>
              <View>
                <Text style={styles.currencyCode}>{currencyCode}</Text>
                <Text style={styles.currencyName}>{currencyName}</Text>
              </View>
              <CurrenciesCheckbox
                selectedCurrencies={selectedCurrencies}
                currencyCode={currencyCode}
                setModalSelectedCurrencies={setModalSelectedCurrencies}
                isActive={isActive}
              />
            </View>
          );
        })}
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
