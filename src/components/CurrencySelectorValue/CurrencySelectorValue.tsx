import React, { useContext, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { CountryFlag } from 'components/common/CountryFlag';
import { ThemeContext } from 'context/ThemeProvider/ThemeProvider';
import { l } from 'resources/localization';

import { useOnPressHandler } from './CurrencySelectorValue.hooks';
import { Props } from './CurrencySelectorValue.types';

import { useStyles } from './CurrencySelectorValue.styles';

// const MAX_CURRENCY_NAME_LENGTH = 30;

export const CurrencySelectorValue: React.FC<Props> = React.memo(
  ({
    currencyCode,
    modalSelectedCurrencies,
    setModalSelectedCurrencies,
    isExpanded,
  }) => {
    const { themeColors } = useContext(ThemeContext);
    const styles = useStyles();

    const [isActive, setIsActive] = useState(() =>
      (modalSelectedCurrencies as string[]).includes(currencyCode),
    );

    const onPressHandler = useOnPressHandler(
      isExpanded,
      isActive,
      modalSelectedCurrencies,
      currencyCode,
      setModalSelectedCurrencies,
      setIsActive,
    );

    const currencyName = l[currencyCode];

    // const CurrencyName = () =>
    //   //todo: fix this(crash)
    //   currencyName.length === MAX_CURRENCY_NAME_LENGTH ? (
    //     <TextTicker
    //       style={styles.currencyName}
    //       duration={3000}
    //       animationType="bounce"
    //       bounce={true}
    //       repeatSpacer={10}
    //       bouncePadding={{
    //         left: 0,
    //       }}
    //       marqueeDelay={1000}>
    //       {currencyName}
    //     </TextTicker>
    //   ) : (
    //     <Text style={styles.currencyName}>{currencyName}</Text>
    //   );

    return (
      <View style={styles.currencyBlockWrapper}>
        <Pressable
          key={currencyCode}
          style={styles.currencyBlock}
          onPress={onPressHandler}
          android_ripple={{ borderless: true }}>
          <View style={styles.currencyInfoWrapper}>
            <CountryFlag currencyCode={currencyCode} size={36} />
            <View style={styles.currencyCodeNameWrapper}>
              <Text style={styles.currencyCode}>{currencyCode}</Text>
              <Text style={styles.currencyName}>{currencyName}</Text>
            </View>
          </View>
          <BouncyCheckbox
            size={30}
            fillColor={themeColors.ACCENT_COLOR_LIGHTER}
            onPress={onPressHandler}
            isChecked={isActive}
            disableBuiltInState
            bounceFriction={4}
            style={styles.checkBoxContainer}
          />
        </Pressable>
      </View>
    );
  },
);
