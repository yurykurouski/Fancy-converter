import React, { NamedExoticComponent } from 'react';
import { Path, Svg } from 'react-native-svg';
import { THEME_COLORS } from 'assets/colors';
import { colorSchemeStore } from 'store/colorSchemeStore';
import { TSVGIcon } from 'types';
import { useSnapshot } from 'valtio';

export const RightArrowIcon: NamedExoticComponent<TSVGIcon> = React.memo(
  ({ size, style, color }) => {
    const { colorScheme } = useSnapshot(colorSchemeStore);

    return (
      <Svg width={size} height={size} viewBox="0 -960 960 960" style={style}>
        <Path
          d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"
          fill={color ?? THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
        />
      </Svg>
    );
  },
);
