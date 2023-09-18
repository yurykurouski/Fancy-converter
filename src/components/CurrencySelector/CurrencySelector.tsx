import React, { useContext, useRef } from 'react';
import { RefreshControl, View } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import { Layout, SlideOutRight } from 'react-native-reanimated';
import { SwipeableItemImperativeRef } from 'react-native-swipeable-item';
import { useDispatch, useSelector } from 'react-redux';
import { ColorsDark } from 'assets/colors';
import { CurrenciesBottomSheet, CurrencyInputValue } from 'components';
import { ExchangeCourseContext } from 'context';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { SelectedCurrenciesSlice } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { AvaliableCurrenciesNames } from 'types';

import { ANIMATION_CONFIG } from './CurrencySelector.consts';
import { useTrackKeyboardStatus } from './CurrencySelector.hooks';

export const CurrencySelector = ({
  isDrawerOpened,
}: {
  isDrawerOpened: boolean;
}) => {
  const {
    currentExchangeCourseContext: {
      currentExchangeCourse,
      setCurrentExchangeCourse,
    },
  } = useContext(ExchangeCourseContext);

  const dispatch = useDispatch();
  const { selectedCurrencies } = useSelector(selectSelectedCurrencies);
  const setSelectedCurrencies = (value: string[]) => {
    dispatch(SelectedCurrenciesSlice.actions.setSelectedCurrencies(value));
  };
  const { isLoading, exchangeCourse } = currentExchangeCourse;

  const itemRefs = useRef<
    Map<AvaliableCurrenciesNames, SwipeableItemImperativeRef>
  >(new Map());

  const isKeyBoardOpened = useTrackKeyboardStatus();

  const renderItem = ({
    item,
    drag,
  }: RenderItemParams<AvaliableCurrenciesNames>) => (
    <CurrencyInputValue currencyCode={item} drag={drag} itemRefs={itemRefs} />
  );

  return (
    <>
      <DraggableFlatList
        animationConfig={ANIMATION_CONFIG}
        keyboardShouldPersistTaps="handled"
        containerStyle={{ paddingHorizontal: 10 }}
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
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListFooterComponent={() => (
          <View style={{ height: isKeyBoardOpened ? 35 : 75 }} />
        )}
        activationDistance={10}
        showsVerticalScrollIndicator={false}
        enableLayoutAnimationExperimental
        itemExitingAnimation={SlideOutRight.duration(250)}
        itemLayoutAnimation={Layout.delay(250).duration(150)}
      />
      {exchangeCourse && (
        <CurrenciesBottomSheet
          isDrawerOpened={isDrawerOpened}
          selectedCurrencies={selectedCurrencies}
          setSelectedCurrencies={setSelectedCurrencies}
        />
      )}
    </>
  );
};
