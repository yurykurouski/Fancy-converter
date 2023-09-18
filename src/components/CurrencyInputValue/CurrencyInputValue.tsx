import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import {
  Platform,
  Pressable,
  Text,
  TextInput,
  UIManager,
  Vibration,
  View,
} from 'react-native';
import { OpacityDecorator } from 'react-native-draggable-flatlist';
import SwipeableItem, { OpenDirection } from 'react-native-swipeable-item';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CancelButton } from 'components/common/CancelButton';
import { CountryFlag } from 'components/common/CountryFlag';
import {
  ExchangeCourseContext,
  FocusedCurrencyContext,
  NotificationContext,
  SelectedCurrenciesContext,
} from 'context';
import { useFilteredCourseBySelectedCurrencies } from 'hooks';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import {
  useConvertedValues,
  useCurrencyInputHandlers,
  useFormattedValue,
  useHandleDeletePress,
  useKeyboardHandlers,
} from './CurrencyInputValue.hooks';
import { Props } from './CurrencyInputValue.types';

import { useStyles } from './CurrencyInputValue.styles';

const OVERSWIPE_DIST = 10;

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const CurrencyInputValue: FC<Props> = React.memo(
  ({ currencyCode, drag, itemRefs }) => {
    const { colorScheme } = useSelector(selectColorSchemeState);

    const {
      focusedCurrencyContext: {
        focusedCurrency,
        setFocusedCurrencyName,
        setFocusedCurrencyValue,
      },
    } = useContext(FocusedCurrencyContext);
    const {
      currentExchangeCourseContext: { currentExchangeCourse },
    } = useContext(ExchangeCourseContext);
    const {
      selectedCurrenciesContext: { selectedCurrencies, setSelectedCurrencies },
    } = useContext(SelectedCurrenciesContext);

    const startNotification = useContext(NotificationContext);

    const { focusedCurrencyName, focusedCurrencyValue } = focusedCurrency;

    const { exchangeCourse } = currentExchangeCourse;

    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [isReadyToDelete, setIsReadyToDelete] = useState(false);

    const styles = useStyles();

    const inputRef = useRef<TextInput>(null);

    const selectedCourses = useFilteredCourseBySelectedCurrencies(
      exchangeCourse,
      selectedCurrencies,
    );

    const course = selectedCourses?.[currencyCode];
    const focusedCurrencyCourse = selectedCourses?.[focusedCurrencyName];

    const isFocused = focusedCurrencyName === currencyCode;

    const {
      onChangeTextHandler,
      onFocusHandler,
      containerOnPressHandler,
      value,
    } = useCurrencyInputHandlers({
      setFocusedCurrencyValue,
      setFocusedCurrencyName,
      currencyCode,
      inputRef,
    });

    const caclulatedValue = useConvertedValues(
      isFocused,
      value,
      focusedCurrencyValue,
      course,
      focusedCurrencyCourse,
    );

    const formattedValue = useFormattedValue(caclulatedValue);

    useKeyboardHandlers(setIsKeyboardVisible);

    const handleLongPress = () => {
      Vibration.vibrate(30);
      drag();
    };

    const handleDeletePress = useHandleDeletePress({
      setIsReadyToDelete,
      selectedCurrencies,
      currencyCode,
      setSelectedCurrencies,
      startNotification,
    });

    useEffect(() => {
      if (isReadyToDelete) {
        setIsReadyToDelete(false);
        itemRefs.current.get(currencyCode).close();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [caclulatedValue]);

    return (
      <OpacityDecorator>
        <SwipeableItem
          item={currencyCode}
          ref={ref => {
            if (ref && !itemRefs.current.get(currencyCode)) {
              itemRefs.current.set(currencyCode, ref);
            }
          }}
          onChange={({ openDirection }) => {
            openDirection === OpenDirection.RIGHT
              ? setIsReadyToDelete(true)
              : setIsReadyToDelete(false);
          }}
          overSwipe={OVERSWIPE_DIST}
          renderUnderlayRight={() => (
            <View style={styles.underlayBackground}>
              <CancelButton size={30} onPress={handleDeletePress} />
            </View>
          )}
          snapPointsRight={[0, 60]}>
          <View
            style={[
              styles.containerWrapper,
              styles.container,
              isFocused && styles.containerWrapperFocused,
            ]}>
            <Pressable
              onLongPress={handleLongPress}
              onPress={containerOnPressHandler}>
              <Text style={[styles.title, isFocused && styles.titleFocused]}>
                {currencyCode}
              </Text>
            </Pressable>
            <TextInput
              style={styles.input}
              placeholderTextColor={THEME_COLORS[colorScheme].FONT_COLOR_FADED}
              value={formattedValue}
              onChangeText={onChangeTextHandler}
              onFocus={() => onFocusHandler(caclulatedValue)}
              ref={inputRef}
              keyboardType="numeric"
              contextMenuHidden
              placeholder="0"
              maxLength={14}
              caretHidden={!isKeyboardVisible}
            />
            {isFocused && !!caclulatedValue && !isReadyToDelete && (
              <CancelButton
                onPress={onChangeTextHandler}
                additionalStyle={{ marginHorizontal: 10 }}
              />
            )}
            <CountryFlag currencyCode={currencyCode} size={30} />
          </View>
        </SwipeableItem>
      </OpacityDecorator>
    );
  },
);
