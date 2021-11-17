import React, { useContext, useState } from 'react';
import { Button } from 'react-native';

import { SelectedCurrenciesContext } from '../Context/SelectedCurrenciesContext';
import { CurrenciesOverlay } from '../CurrenciesOverlay/CurrenciesOverlay';
import { CurrencyValue } from '../CurrencyValue';

export const CurrencySelector = ({ exchangeCourse }) => {
  const [isModal, setIsModal] = useState(false);
  const {
    selectedCurrenciesContext: { selectedCurrencies },
  } = useContext(SelectedCurrenciesContext);

  return (
    <>
      {isModal && <CurrenciesOverlay setIsModal={setIsModal} />}

      {selectedCurrencies.length > 0 && !isModal && (
        <CurrencyValue
          selectedCurrencies={selectedCurrencies}
          exchangeCourse={exchangeCourse}
        />
      )}
      <Button onPress={() => setIsModal(true)} title="Add a currency" />
    </>
  );
};
