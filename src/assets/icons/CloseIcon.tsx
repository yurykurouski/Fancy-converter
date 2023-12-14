import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { TSVGIcon } from 'types';

export const CloseIcon: TSVGIcon = React.memo(({ size, style, color }) => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        fill={color ?? THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
      />
    </Svg>
  );
});
