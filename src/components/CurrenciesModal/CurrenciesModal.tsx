import React, { useCallback, useContext, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import { getCurrentThemeColors } from 'utils/getCurrentColorTheme';

import avaliableCurrencies from '../../resources/avaliable-currencies.json';
import { SubmitButton } from '../common/SubmitButton';
import { SelectedCurrenciesContext } from '../Context/SelectedCurrenciesContext';
import { useCurrenciesListToArray } from '../CurrencySelector/CurrencySelector.hooks';
import { styles } from './CurrenciesModal.styles';
import { CurrencySelectorValue } from './CurrencySelectorValue';

type Props = {
  setModalVisible: (modalVisible: boolean) => void;
  modalVisible: boolean;
};

const colors = getCurrentThemeColors();
export const CurrenciesModal = React.memo<Props>(
  ({ setModalVisible, modalVisible }) => {
    const {
      selectedCurrenciesContext: { setSelectedCurrencies, selectedCurrencies },
    } = useContext(SelectedCurrenciesContext);

    const [modalSelectedCurrencies, setModalSelectedCurrencies] =
      useState(selectedCurrencies);

    const acceptButtonHandler = useCallback(() => {
      setSelectedCurrencies(modalSelectedCurrencies);

      setModalVisible(false);
    }, [modalSelectedCurrencies, setModalVisible, setSelectedCurrencies]);

    const currenciesArray = useCurrenciesListToArray(avaliableCurrencies);

    return (
      <Modal
        animationInTiming={200}
        animationOutTiming={200}
        isVisible={modalVisible}
        onBackButtonPress={acceptButtonHandler}
        backdropColor={colors.ACCENT_COLOR_DARKER}
        useNativeDriver>
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
              type="acceptButton"
              onPress={acceptButtonHandler}
              title="Close"
            />
          </View>
        </View>
      </Modal>
    );
  },
);
