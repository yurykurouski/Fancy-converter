import React, { Dispatch, SetStateAction, useContext, useRef } from 'react';
import { RefreshControl } from 'react-native';
import { View } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import { Layout, SlideOutRight } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SwipeableItemImperativeRef } from 'react-native-swipeable-item';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CurrencyInputValue } from 'components';
import { NotificationContext } from 'context';
import {
  useGetCurrenciesExchangeCourse,
  useSetSelectedCurrencies,
} from 'hooks';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { AvailableCurrenciesNames } from 'types';

import { ListFooterComponent } from './components/FooterComponent/ListFooterComponent';
import { SeparatorComponent } from './components/SeparatorComponent';
import { ANIMATION_CONFIG } from './CurrencySelector.consts';
import { useOnScrollOffsetChange } from './CurrencySelector.hooks';

import { useStyles } from './CurrencySelector.styles';

export const CurrencySelector = ({
  setIsHeaderBlurred,
}: {
  setIsHeaderBlurred: Dispatch<SetStateAction<boolean>>;
}) => {
  const styles = useStyles();

  const { top } = useSafeAreaInsets();

  const startNotification = useContext(NotificationContext);

  const { isLoading } = useSelector(selectExchangeCourses);
  const { selectedCurrencies } = useSelector(selectSelectedCurrencies);
  const { colorScheme } = useSelector(selectColorSchemeState);

  const setSelectedCurrencies = useSetSelectedCurrencies();

  const { reloadCourses } = useGetCurrenciesExchangeCourse(startNotification);

  const itemRefs = useRef<
    Map<AvailableCurrenciesNames, SwipeableItemImperativeRef>
  >(new Map());

  const renderItem = ({
    item,
    drag,
  }: RenderItemParams<AvailableCurrenciesNames>) => (
    <CurrencyInputValue currencyCode={item} drag={drag} itemRefs={itemRefs} />
  );

  const onOffsetChange = useOnScrollOffsetChange(setIsHeaderBlurred);

  return (
    <DraggableFlatList
      animationConfig={ANIMATION_CONFIG}
      keyboardShouldPersistTaps="handled"
      containerStyle={styles.container}
      data={selectedCurrencies}
      keyExtractor={item => item}
      renderItem={renderItem}
      onScrollOffsetChange={onOffsetChange}
      //TODO
      onDragEnd={props => setSelectedCurrencies(props.data)}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          progressViewOffset={top}
          onRefresh={reloadCourses}
          //android
          colors={[THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR]}
          progressBackgroundColor={
            THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
          }
          //ios
          tintColor={THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
        />
      }
      ItemSeparatorComponent={SeparatorComponent}
      ListFooterComponent={
        selectedCurrencies.length ? ListFooterComponent : null
      }
      ListHeaderComponent={<View style={styles.headerComponent} />}
      activationDistance={10}
      showsVerticalScrollIndicator={false}
      enableLayoutAnimationExperimental
      itemExitingAnimation={SlideOutRight.duration(250)}
      itemLayoutAnimation={Layout.delay(250).duration(150)}
    />
  );
};
