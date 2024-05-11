import React, { NamedExoticComponent } from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors } from 'assets/colors';
import { TSVGIcon } from 'types';

export const MenuIcon: NamedExoticComponent<TSVGIcon> = React.memo(
  ({ size, style }) => {
    return (
      <Svg width={size} height={size} viewBox="0 0 18 12" style={style}>
        <Path
          d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
          fill={Colors?.FONT_PRIMARY_COLOR}
        />
      </Svg>
    );
  },
);
