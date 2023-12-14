import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { TSVGIcon } from 'types';

export const LeftArrowIcon: TSVGIcon = ({ size, style, color }) => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" style={style}>
      <Path
        d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"
        fill={color ?? THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
      />
    </Svg>
  );
};