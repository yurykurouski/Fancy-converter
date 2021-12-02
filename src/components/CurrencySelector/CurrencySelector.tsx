import BottomSheet from '@gorhom/bottom-sheet';
import { CurrenciesBottomSheet } from 'components/CurrenciesBottomSheet';
import React, { useContext, useRef } from 'react';
import { ScrollView } from 'react-native';
import { ResultFromAPI } from 'types/avaliable-currencies';

import { FocusedCurrencyProvider } from '../Context/FocusedCurrencyContext';
import { SelectedCurrenciesContext } from '../Context/SelectedCurrenciesContext';
import { CurrencyValue } from '../CurrencyValue';
import { styles } from './CurrencySelector.styles';

type Props = {
  exchangeCourse: ResultFromAPI[] | null;
};

export const CurrencySelector: React.FC<Props> = React.memo(
  ({ exchangeCourse }) => {
    const {
      selectedCurrenciesContext: { selectedCurrencies },
    } = useContext(SelectedCurrenciesContext);

    const sheetRef = useRef<BottomSheet>(null);

    return (
      <>
        <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
          {selectedCurrencies.length > 0 && (
            <FocusedCurrencyProvider>
              <CurrencyValue
                selectedCurrencies={selectedCurrencies}
                exchangeCourse={exchangeCourse}
              />
            </FocusedCurrencyProvider>
          )}
        </ScrollView>
        <CurrenciesBottomSheet sheetRef={sheetRef} />
      </>
    );
  },
);
