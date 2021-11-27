import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { ResultFromAPI } from 'types/avaliable-currencies';

import { FocusedCurrencyProvider } from '../Context/FocusedCurrencyContext';
import { SelectedCurrenciesContext } from '../Context/SelectedCurrenciesContext';
import { CurrenciesModal } from '../CurrenciesModal/CurrenciesModal';
import { CurrencyValue } from '../CurrencyValue';
import { styles } from './CurrencySelector.styles';

type Props = {
  exchangeCourse: ResultFromAPI[] | null;
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
      <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
        {selectedCurrencies.length > 0 && (
          <FocusedCurrencyProvider>
            <CurrencyValue
              selectedCurrencies={selectedCurrencies}
              exchangeCourse={exchangeCourse}
            />
          </FocusedCurrencyProvider>
        )}
        <RectButton onPress={() => setModalVisible(true)} style={styles.fab}>
          <Text style={styles.fabText}>Add a currency</Text>
        </RectButton>
      </ScrollView>
    </>
  );
};
