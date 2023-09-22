import React, { useContext, useRef } from 'react';
import { RefreshControl, View } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import { Layout, SlideOutRight } from 'react-native-reanimated';
import { SwipeableItemImperativeRef } from 'react-native-swipeable-item';
import { useSelector } from 'react-redux';
import { ColorsDark } from 'assets/colors';
import { CurrencyInputValue } from 'components';
import { NotificationContext } from 'context';
import {
  useGetCurrenciesExchangeCourse,
  useSetSelectedCurrencies,
} from 'hooks';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { AvailableCurrenciesNames } from 'types';

import { ANIMATION_CONFIG } from './CurrencySelector.consts';
import { useTrackKeyboardStatus } from './CurrencySelector.hooks';

export const CurrencySelector = () => {
  const startNotification = useContext(NotificationContext);

  const { isLoading } = useSelector(selectExchangeCourses);

  const { reloadCourses } = useGetCurrenciesExchangeCourse(startNotification);

  const { selectedCurrencies } = useSelector(selectSelectedCurrencies);

  const setSelectedCurrencies = useSetSelectedCurrencies();

  const itemRefs = useRef<
    Map<AvailableCurrenciesNames, SwipeableItemImperativeRef>
  >(new Map());

  const isKeyBoardOpened = useTrackKeyboardStatus();

  const renderItem = ({
    item,
    drag,
  }: RenderItemParams<AvailableCurrenciesNames>) => (
    <CurrencyInputValue currencyCode={item} drag={drag} itemRefs={itemRefs} />
  );

  return (
    <DraggableFlatList
      animationConfig={ANIMATION_CONFIG}
      keyboardShouldPersistTaps="handled"
      containerStyle={{ paddingHorizontal: 10 }}
      data={selectedCurrencies}
      keyExtractor={item => item}
      renderItem={renderItem}
      //TODO
      onDragEnd={props => setSelectedCurrencies(props.data)}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={reloadCourses}
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
  );
};
