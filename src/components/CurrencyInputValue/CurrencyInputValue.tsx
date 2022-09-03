import React, { useContext, useRef, useState } from 'react';
import { Pressable, Text, TextInput, Vibration, View } from 'react-native';
import { OpacityDecorator } from 'react-native-draggable-flatlist';
import { CancelButton } from 'components/common/CancelButton';
import {
  ExchangeCourseContext,
  FocusedCurrencyContext,
  SelectedCurrenciesContext,
} from 'context';
import { ThemeContext } from 'context/ThemeProvider/ThemeProvider';
import { useFilteredCourseBySelectedCurrencies } from 'hooks';

import {
  useConvertedValues,
  useCurrencyInputHandlers,
  useFormattedValue,
  useKeyboardHandlers,
} from './CurrencyInputValue.hooks';
import { Props } from './CurrencyInputValue.types';
import { FlagButton } from './FlagButton';
import { Gradient } from './Gradient';

import { useStyles } from './CurrencyInputValue.styles';

export const CurrencyInputValue: React.FC<Props> = React.memo(
  ({ currencyCode, drag }) => {
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
      selectedCurrenciesContext: { selectedCurrencies },
    } = useContext(SelectedCurrenciesContext);

    const { focusedCurrencyName, focusedCurrencyValue } = focusedCurrency;

    const { exchangeCourse } = currentExchangeCourse;

    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [isReadyToDelete, setIsReadyToDelete] = useState(false);
    const [value, setValue] = useState(null);

    const styles = useStyles();

    const inputRef = useRef(null);

    const selectedCourses = useFilteredCourseBySelectedCurrencies(
      exchangeCourse,
      selectedCurrencies,
    );

    const course = selectedCourses?.[currencyCode];
    const focusedCurrencyCourse = selectedCourses?.[focusedCurrencyName];

    const isFocused = focusedCurrencyName === currencyCode;

    const { onChangeTextHandler, onFocusHandler, containerOnPressHandler } =
      useCurrencyInputHandlers(
        setFocusedCurrencyValue,
        setValue,
        setFocusedCurrencyName,
        currencyCode,
        inputRef,
      );

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
      // setIsReadyToDelete(value => !value);
    };

    return (
      <OpacityDecorator>
        <View
          style={{
            marginBottom: 10,
            paddingHorizontal: 10,
          }}>
          <Gradient isReadyToDelete={isReadyToDelete} isFocused={isFocused} />

          <View
            style={[
              styles.containerWrapper,
              styles.container,
              isFocused && !isReadyToDelete && styles.containerWrapperFocused,
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
            <FlagButton
              isReadyToDelete={isReadyToDelete}
              currencyCode={currencyCode}
              setIsReadyToDelete={setIsReadyToDelete}
            />
          </View>
        </View>
      </OpacityDecorator>
    );
  },
);
