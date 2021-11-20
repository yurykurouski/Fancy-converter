import React, { useContext, useState } from 'react';
import { Modal, ScrollView, View } from 'react-native';

import avaliableCurrencies from '../../resources/avaliable-currencies.json';
import { HorisontalDivider } from '../common/HorisontalDivider';
import { SubmitButton } from '../common/SubmitButton';
import { SelectedCurrenciesContext } from '../Context/SelectedCurrenciesContext';
import { useCurrenciesListToArray } from '../CurrencySelector/CurrencySelector.hooks';
import { styles } from './CurrenciesModal.styles';
import { CurrencySelectorValue } from './CurrencySelectorValue';

type Props = {
  setModalVisible: (modalVisible: boolean) => void;
  modalVisible: boolean;
};

export const CurrenciesModal = React.memo<Props>(
  ({ setModalVisible, modalVisible }) => {
    const {
      selectedCurrenciesContext: { setSelectedCurrencies, selectedCurrencies },
    } = useContext(SelectedCurrenciesContext);

    const [modalSelectedCurrencies, setModalSelectedCurrencies] =
      useState(selectedCurrencies);

    const acceptButtonHandler = () => {
      setSelectedCurrencies(modalSelectedCurrencies);

      setModalVisible(false);
    };

    const currenciesArray = useCurrenciesListToArray(avaliableCurrencies);

    return (
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
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
              onPress={() => setModalVisible(false)}
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
      </Modal>
    );
  },
);
