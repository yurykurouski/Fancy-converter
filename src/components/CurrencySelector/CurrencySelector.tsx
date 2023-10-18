import React, { Dispatch, SetStateAction, useContext } from 'react';
import { ListRenderItem, RefreshControl, View } from 'react-native';
import Animated, { Layout } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CurrencyInputValue } from 'components';
import { DEFAULT_ANIMATION_DURATION } from 'constants/constants';
import { NotificationContext } from 'context';
import { useGetCurrenciesExchangeCourse } from 'hooks';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { AvailableFiatNames } from 'types';
import { isIos } from 'utils';

import { ListFooterComponent } from './components/FooterComponent/ListFooterComponent';
import { SeparatorComponent } from './components/SeparatorComponent';
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

  const { reloadCourses } = useGetCurrenciesExchangeCourse(startNotification);

  const renderItem: ListRenderItem<AvailableFiatNames> = ({ item }) => (
    <CurrencyInputValue currencyCode={item} />
  );

  const onOffsetChange = useOnScrollOffsetChange(setIsHeaderBlurred);

  return (
    <Animated.FlatList
      keyboardShouldPersistTaps="handled"
      style={styles.container}
      data={selectedCurrencies}
      keyExtractor={item => item}
      renderItem={renderItem}
      onScroll={onOffsetChange}
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
      showsVerticalScrollIndicator={false}
      itemLayoutAnimation={
        isIos
          ? Layout.delay(DEFAULT_ANIMATION_DURATION).duration(
              DEFAULT_ANIMATION_DURATION,
            )
          : undefined
      }
      getItemLayout={(_, index) => ({
        length: 74,
        offset: 74 * index,
        index,
      })}
    />
  );
};
