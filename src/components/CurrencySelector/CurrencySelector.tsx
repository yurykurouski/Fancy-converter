import React, { useContext } from 'react';
import { RefreshControl } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { RenderItemParams } from 'react-native-draggable-flatlist';
import { ColorsDark } from 'assets/colors';
import { CurrenciesBottomSheet } from 'components/CurrenciesBottomSheet';
import { CurrencyInputValue } from 'components/CurrencyInputValue';
import { ExchangeCourseContext, SelectedCurrenciesContext } from 'context';

import { useTrackKeyboardStatus } from './CurrencySelector.hooks';

export const CurrencySelector = () => {
  const {
    selectedCurrenciesContext: { selectedCurrencies, setSelectedCurrencies },
  } = useContext(SelectedCurrenciesContext);

  const {
    currentExchangeCourseContext: {
      currentExchangeCourse,
      setCurrentExchangeCourse,
    },
  } = useContext(ExchangeCourseContext);

  const { isLoading, exchangeCourse } = currentExchangeCourse;

  const isKeyBoardOpened = useTrackKeyboardStatus();

  const renderItem = ({ item, drag }: RenderItemParams<string>) => (
    <CurrencyInputValue currencyCode={item} drag={drag} />
  );

  return (
    <>
      <DraggableFlatList
        animationConfig={{
          damping: 20,
          mass: 0.1,
          stiffness: 100,
          overshootClamping: false,
          restSpeedThreshold: 1,
          restDisplacementThreshold: 1,
        }}
        keyboardShouldPersistTaps="handled"
        containerStyle={
          isKeyBoardOpened
            ? { marginBottom: 20, flex: 1 }
            : { marginBottom: 60, flex: 1 }
        }
        data={selectedCurrencies}
        keyExtractor={item => item}
        renderItem={renderItem}
        onDragEnd={props => setSelectedCurrencies(props.data)}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={setCurrentExchangeCourse}
            colors={[ColorsDark.MAIN_BUTTON_COLOR]}
          />
        }
        onRefresh={setCurrentExchangeCourse}
        refreshing={isLoading}
      />
      {exchangeCourse && (
        <CurrenciesBottomSheet
          selectedCurrencies={selectedCurrencies}
          setSelectedCurrencies={setSelectedCurrencies}
        />
      )}
    </>
  );
};
