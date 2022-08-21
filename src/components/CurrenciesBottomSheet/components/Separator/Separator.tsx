import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from 'context';

export const Separator = React.memo(({ value }: { value: string }) => {
  const { themeColors } = useContext(ThemeContext);

  return (
    <View
      style={{
        marginBottom: 10,
        alignItems: 'flex-start',
      }}>
      <Text
        style={[
          {
            paddingHorizontal: 10,
            paddingTop: 4,
            fontSize: 18,
            lineHeight: 18,
            fontWeight: '700',
            color: themeColors.ACCENT_COLOR_LIGHTER,
            borderRadius: 16,
            backgroundColor: themeColors.ELEMENT_FADE_OR_BACKGROUND_DARKER,
          },
        ]}>
        {value}
      </Text>
    </View>
  );
});
