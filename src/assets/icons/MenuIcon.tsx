import React, { NamedExoticComponent } from 'react';
import { Path, Svg } from 'react-native-svg';
import { THEME_COLORS } from 'assets/colors';
import { colorSchemeStore } from 'store/colorSchemeStore';
import { TSVGIcon } from 'types';
import { useSnapshot } from 'valtio';

export const MenuIcon: NamedExoticComponent<TSVGIcon> = React.memo(
  ({ size, style }) => {
    const { colorScheme } = useSnapshot(colorSchemeStore);

    return (
      <Svg width={size} height={size} viewBox="0 0 18 12" style={style}>
        <Path
          d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
          fill={THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
        />
      </Svg>
    );
  },
);
