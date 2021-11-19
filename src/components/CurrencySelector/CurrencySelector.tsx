import React, { useContext, useState } from 'react';
import { Button } from 'react-native';

import { FocusedCurrencyProvider } from '../Context/FocusedCurrencyContext';
import { SelectedCurrenciesContext } from '../Context/SelectedCurrenciesContext';
import { CurrenciesOverlay } from '../CurrenciesOverlay/CurrenciesOverlay';
import { CurrencyValue } from '../CurrencyValue';

export const CurrencySelector = ({ exchangeCourse }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    selectedCurrenciesContext: { selectedCurrencies },
  } = useContext(SelectedCurrenciesContext);

  return (
    <>
      <CurrenciesOverlay
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />

      {selectedCurrencies.length > 0 && (
        <FocusedCurrencyProvider>
          <CurrencyValue
            selectedCurrencies={selectedCurrencies}
            exchangeCourse={exchangeCourse}
          />
        </FocusedCurrencyProvider>
      )}
      <Button onPress={() => setModalVisible(true)} title="Add a currency" />
    </>
  );
};
