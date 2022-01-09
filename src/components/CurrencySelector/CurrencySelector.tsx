import BottomSheet from '@gorhom/bottom-sheet';
import { CurrenciesBottomSheet } from 'components/CurrenciesBottomSheet';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Keyboard, ScrollView } from 'react-native';
import { OnlyCourses } from 'utils/utils.types';

import { FocusedCurrencyProvider } from '../Context/FocusedCurrencyContext';
import { SelectedCurrenciesContext } from '../Context/SelectedCurrenciesContext';
import { CurrencyValue } from '../CurrencyValue';
import { styles } from './CurrencySelector.styles';

type Props = {
  exchangeCourse: OnlyCourses | null;
};

export const CurrencySelector: React.FC<Props> = React.memo(
  ({ exchangeCourse }) => {
    const {
      selectedCurrenciesContext: { selectedCurrencies },
    } = useContext(SelectedCurrenciesContext);

    const sheetRef = useRef<BottomSheet>(null);

    const [keyBoardOpened, setKeyBoardOpened] = useState(false);

    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setKeyBoardOpened(true);
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setKeyBoardOpened(false);
      });

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);

    return (
      <>
        <ScrollView
          style={[
            styles.container,
            keyBoardOpened ? { marginBottom: 20 } : { marginBottom: 60 },
          ]}
          keyboardShouldPersistTaps="handled">
          {selectedCurrencies.length > 0 && (
            <FocusedCurrencyProvider>
              <CurrencyValue
                selectedCurrencies={selectedCurrencies}
                exchangeCourse={exchangeCourse}
              />
            </FocusedCurrencyProvider>
          )}
        </ScrollView>
        <CurrenciesBottomSheet
          sheetRef={sheetRef}
          selectedCurrencies={selectedCurrencies}
        />
      </>
    );
  },
);
