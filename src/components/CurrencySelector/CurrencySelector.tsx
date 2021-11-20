import React, { useContext, useState } from 'react';
import { Button, ScrollView } from 'react-native';

import { FocusedCurrencyProvider } from '../Context/FocusedCurrencyContext';
import { SelectedCurrenciesContext } from '../Context/SelectedCurrenciesContext';
import { CurrenciesModal } from '../CurrenciesModal/CurrenciesModal';
import { CurrencyValue } from '../CurrencyValue';
import { styles } from './CurrencySelector.styles';

type Props = {
  exchangeCourse: string;
};

export const CurrencySelector: React.FC<Props> = ({ exchangeCourse }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    selectedCurrenciesContext: { selectedCurrencies },
  } = useContext(SelectedCurrenciesContext);

  return (
    <>
      <CurrenciesModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <ScrollView style={styles.container}>
        {selectedCurrencies.length > 0 && (
          <FocusedCurrencyProvider>
            <CurrencyValue
              selectedCurrencies={selectedCurrencies}
              exchangeCourse={exchangeCourse}
            />
          </FocusedCurrencyProvider>
        )}
        <Button onPress={() => setModalVisible(true)} title="Add a currency" />
      </ScrollView>
    </>
  );
};
