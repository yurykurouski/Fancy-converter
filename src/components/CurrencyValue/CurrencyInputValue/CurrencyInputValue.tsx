import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  Vibration,
  View,
} from 'react-native';
import { CancelButton } from 'components/common/CancelButton';
import { ThemeContext } from 'context/ThemeProvider/ThemeProvider';

import { FlagButton } from '../FlagButton';
import { Gradient } from '../Gradient';

import {
  useConvertedValues,
  useCurrencyInputHandlers,
  useFormattedValue,
} from './CurrencyInputValue.hooks';
import { Props } from './CurrencyInputValue.types';

import { useStyles } from './CurrencyInputValue.styles';

export const CurrencyInputValue: React.FC<Props> = ({
  currencyCode,
  focusedCurrencyName,
  setFocusedCurrencyName,
  setFocusedCurrencyValue,
  focusedCurrencyValue,
  course,
  focusedCurrencyCourse,
}) => {
  const { themeColors } = useContext(ThemeContext);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [isReadyToDelete, setIsReadyToDelete] = useState(false);

  const styles = useStyles();

  const inputRef = useRef(null);

  const [value, setValue] = useState(null);
  const isFocused = focusedCurrencyName === currencyCode;

  const [onChangeTextHandler, onFocusHandler, containerOnPressHandler] =
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

  useEffect(() => {
    const removeShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });

    const removeHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      removeShowListener.remove();
      removeHideListener.remove();
    };
  }, []);

  const handleLongPress = () => {
    Vibration.vibrate(30);
    containerOnPressHandler();
    setIsReadyToDelete(value => !value);
  };
  console.log('test');
  return (
    <View
      style={{
        marginBottom: 10,
        paddingHorizontal: 10,
      }}>
      <Gradient isReadyToDelete={isReadyToDelete} isFocused={isFocused} />

      <View
        style={[
          styles.containerWrapper,
          isFocused && !isReadyToDelete && styles.containerWrapperFocused,
        ]}>
        <Pressable
          key={currencyCode}
          onPress={containerOnPressHandler}
          android_ripple={{ borderless: false }}
          style={styles.container}>
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
            contextMenuHidden={true}
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
        </Pressable>
      </View>
    </View>
  );
};
