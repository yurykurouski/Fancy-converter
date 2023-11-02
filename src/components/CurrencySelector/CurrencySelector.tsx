import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { ListRenderItem, RefreshControl, View } from 'react-native';
import Animated, { Layout } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CurrencyInputValue } from 'components';
import { DEFAULT_ANIMATION_DURATION } from 'constants/constants';
import { useGetCurrenciesExchangeCourse } from 'hooks';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectFavoriteCurrencies } from 'store/favoriteCurrencies/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { selectColorSchemeState } from 'store/ui/selectors';
import { EAvailableFiatNames } from 'types';
import { isIos } from 'utils';

import { ListFooterComponent } from './components/FooterComponent/ListFooterComponent';
import { SeparatorComponent } from './components/SeparatorComponent';
import { useOnScrollOffsetChange } from './CurrencySelector.hooks';

import { useStyles } from './CurrencySelector.styles';

import { KeyboardAvoidingHOC } from 'HOC/KeyboardAvoidingHOC';

export const CurrencySelector = React.memo(
  ({
    setIsHeaderBlurred,
  }: {
    setIsHeaderBlurred: Dispatch<SetStateAction<boolean>>;
  }) => {
    const styles = useStyles();

    const { top } = useSafeAreaInsets();

    const { isLoading } = useSelector(selectExchangeCourses);
    const { currencies } = useSelector(selectSelectedCurrencies);
    const { colorScheme } = useSelector(selectColorSchemeState);
    const { favoriteCurrencies } = useSelector(selectFavoriteCurrencies);

    const { reloadCourses } = useGetCurrenciesExchangeCourse();

    const renderItem: ListRenderItem<EAvailableFiatNames> = ({ item }) => (
      <CurrencyInputValue currencyCode={item} />
    );

    const onOffsetChange = useOnScrollOffsetChange(setIsHeaderBlurred);

    const sortedWithFavorites = useMemo(() => {
      return Object.keys(currencies).sort(a => {
        //@ts-expect-error
        if (favoriteCurrencies[a]) return -1;
        return 1;
      });
    }, [favoriteCurrencies, currencies]);

    return (
      <KeyboardAvoidingHOC>
        <Animated.FlatList
          keyboardShouldPersistTaps="handled"
          style={styles.container}
          data={sortedWithFavorites}
          keyExtractor={item => item}
          renderItem={renderItem}
          onScroll={onOffsetChange}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              progressViewOffset={top + (isIos ? 26 : 18)}
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
            Object.keys(currencies).length ? ListFooterComponent : null
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
      </KeyboardAvoidingHOC>
    );
  },
);
