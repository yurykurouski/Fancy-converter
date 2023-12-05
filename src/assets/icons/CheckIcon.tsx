import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { ColorsDark, ColorsLight, THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

type TProps = {
  size: number;
  style?: StyleProp<ViewStyle>;
  color?: ColorsLight | ColorsDark;
};

export const CheckIcon = ({ size, style, color }: TProps) => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" style={style}>
      <Path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z"
        fill={color ?? THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
        transform="scale(-1 1) translate(-20,0)"
      />
    </Svg>
  );
};
