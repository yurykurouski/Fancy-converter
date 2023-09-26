import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CancelButton } from 'components/common/CancelButton';
import { CountryFlag } from 'components/common/CountryFlag';
import { NotificationContext } from 'context';
import {
  useFilteredCourseBySelectedCurrencies,
  useSetSelectedCurrencies,
} from 'hooks';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectFocusedCurrency } from 'store/focusedCurrency/selectors';
import { FocusedCurrencySlice } from 'store/focusedCurrency/slices/FocusedCurrencySlice';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { AvailableCurrenciesNames } from 'types';

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
    const startNotification = useContext(NotificationContext);

    const { colorScheme } = useSelector(selectColorSchemeState);
    const { exchangeCourses } = useSelector(selectExchangeCourses);
    const { selectedCurrencies } = useSelector(selectSelectedCurrencies);
    const { focusedCurrencyName, focusedCurrencyValue } = useSelector(
      selectFocusedCurrency,
    );

    const dispatch = useDispatch();

    const setSelectedCurrencies = useSetSelectedCurrencies();

    const setFocusedCurrencyValue = useCallback(
      (value: string) =>
        dispatch(FocusedCurrencySlice.actions.setFocusedCurrencyValue(value)),
      [dispatch],
    );
    const setFocusedCurrencyName = useCallback(
      (name: AvailableCurrenciesNames) =>
        dispatch(FocusedCurrencySlice.actions.setFocusedCurrencyName(name)),
      [dispatch],
    );

    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [isReadyToDelete, setIsReadyToDelete] = useState(false);

    const styles = useStyles();

    const inputRef = useRef<TextInput>(null);

    const selectedCourses = useFilteredCourseBySelectedCurrencies(
      exchangeCourses,
      selectedCurrencies,
    );

    const course = selectedCourses?.[currencyCode];
    const focusedCurrencyCourse =
      focusedCurrencyName && selectedCourses?.[focusedCurrencyName];

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

    const calculatedValue = useConvertedValues(
      isFocused,
      value,
      focusedCurrencyValue,
      course,
      focusedCurrencyCourse,
    );

    const formattedValue = useFormattedValue(calculatedValue);

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
        itemRefs.current?.get(currencyCode)?.close();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [calculatedValue]);

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
              placeholderTextColor={THEME_COLORS[colorScheme!].FONT_COLOR_FADED}
              value={formattedValue}
              onChangeText={onChangeTextHandler}
              onFocus={() => onFocusHandler(calculatedValue)}
              ref={inputRef}
              keyboardType="numeric"
              contextMenuHidden
              placeholder="0"
              maxLength={14}
              caretHidden={!isKeyboardVisible}
            />
            {isFocused && !!calculatedValue && !isReadyToDelete && (
              <CancelButton
                onPress={onChangeTextHandler}
                additionalStyle={styles.cancelBtnAdditional}
              />
            )}
            <CountryFlag currencyCode={currencyCode} size={30} />
          </View>
        </SwipeableItem>
      </OpacityDecorator>
    );
  },
);
