import React, { useContext, useState } from 'react';
import { Button } from 'react-native';

import { useFirteredCourseBySelectedCurrencies } from '../../hooks/useFirteredCourseBySelectedCurrencies';
import { SelectedCurrenciesContext } from '../Context/SelectedCurrenciesContext';
import { CurrenciesOverlay } from '../CurrenciesOverlay/CurrenciesOverlay';
import { CurrencyValue } from '../CurrencyValue';

export const CurrencySelector = ({ exchangeCourse }) => {
  const [isModal, setIsModal] = useState(false);
  const {
    selectedCurrenciesContext: { selectedCurrencies },
  } = useContext(SelectedCurrenciesContext);

  const result = useFirteredCourseBySelectedCurrencies(
    exchangeCourse,
    selectedCurrencies,
  );

  return (
    <>
      {isModal && <CurrenciesOverlay setIsModal={setIsModal} />}

      {selectedCurrencies.length > 0 && !isModal && (
        <CurrencyValue selectedCurrencies={selectedCurrencies} />
      )}
      <Button onPress={() => setIsModal(true)} title="Add a currency" />
    </>
  );
};
