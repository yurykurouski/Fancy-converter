import React, { useContext, useEffect, useRef, useState } from 'react';
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
import { CancelButton } from 'components/common/CancelButton';
import { CountryFlag } from 'components/common/CountryFlag';
import {
  ExchangeCourseContext,
  FocusedCurrencyContext,
  NotificationContext,
  SelectedCurrenciesContext,
} from 'context';
import { ThemeContext } from 'context/ThemeProvider/ThemeProvider';
import { useFilteredCourseBySelectedCurrencies } from 'hooks';

import {
  useConvertedValues,
  useCurrencyInputHandlers,
  useFormattedValue,
  useHandleDeletePress,
  useKeyboardHandlers,
} from './CurrencyInputValue.hooks';
import { Props } from './CurrencyInputValue.types';
import { Gradient } from './Gradient';

import { useStyles } from './CurrencyInputValue.styles';

const OVERSWIPE_DIST = 10;
const FEAT_WITH_GRADIENT = false;

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const CurrencyInputValue: React.FC<Props> = React.memo(
  ({ currencyCode, drag, itemRefs }) => {
    const { themeColors } = useContext(ThemeContext);
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
          //*remove comment to enable gradient
          // onChange={({ openDirection }) => {
          //   if (
          //     openDirection === OpenDirection.RIGHT ||
          //     openDirection === OpenDirection.NONE
          //   ) {
          //     setIsReadyToDelete(value => !value);
          //   }
          // }}
          overSwipe={OVERSWIPE_DIST}
          renderUnderlayRight={() => (
            <View style={styles.underlayBackground}>
              <CancelButton size={30} onPress={handleDeletePress} />
            </View>
          )}
          snapPointsRight={[0, 60]}>
          {/** whait for decision about gradient */}
          {FEAT_WITH_GRADIENT && (
            <Gradient isReadyToDelete={isReadyToDelete} isFocused={isFocused} />
          )}
          <View
            style={[
              styles.containerWrapper,
              styles.container,
              //* to enable gradient style just add !isReadyToDelete
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
              placeholderTextColor={themeColors.FONT_COLOR_FADED}
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
