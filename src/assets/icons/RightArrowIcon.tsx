import React, { NamedExoticComponent } from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors } from 'assets/colors';
import { TSVGIcon } from 'types';

export const RightArrowIcon: NamedExoticComponent<TSVGIcon> = React.memo(
  ({ size, style, color }) => {
    return (
      <Svg width={size} height={size} viewBox="0 -960 960 960" style={style}>
        <Path
          d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"
          fill={color ?? Colors?.FONT_PRIMARY_COLOR}
        />
      </Svg>
    );
  },
);
