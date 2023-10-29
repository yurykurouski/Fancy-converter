import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/ui/selectors';
type TProps = {
  size: number;
  style?: StyleProp<ViewStyle>;
};

export const DeleteSweepIcon = ({ size }: TProps) => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  return (
    <Svg width={size} height={size} viewBox="0 0 20 16">
      <Path
        d="M13 12H17V14H13V12ZM13 4H20V6H13V4ZM13 8H19V10H13V8ZM1 14C1 15.1 1.9 16 3 16H9C10.1 16 11 15.1 11 14V4H1V14ZM3 6H9V14H3V6ZM8 0H4L3 1H0V3H12V1H9L8 0Z"
        fill={THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
      />
    </Svg>
  );
};
