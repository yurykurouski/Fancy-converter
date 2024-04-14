import React, { NamedExoticComponent } from 'react';
import Svg, { Path } from 'react-native-svg';
import { THEME_COLORS } from 'assets/colors';
import { colorSchemeStore } from 'store/valtio/colorSchemeStore';
import { TSVGIcon } from 'types';
import { useSnapshot } from 'valtio';

export const BookmarkIcon: NamedExoticComponent<TSVGIcon> = React.memo(
  ({ style, size, color }) => {
    const { colorScheme } = useSnapshot(colorSchemeStore);

    return (
      <Svg width={size} height={size} viewBox="0 0 14 18" style={style}>
        <Path
          d="M11.5627 0.356934H1.9377C0.878945 0.356934 0.0126953 1.22122 0.0126953 2.27757V17.6426L6.7502 14.7617L13.4877 17.6426V2.27757C13.4877 1.22122 12.6214 0.356934 11.5627 0.356934Z"
          fill={color ?? THEME_COLORS[colorScheme!].FONT_COLOR_FADED}
        />
      </Svg>
    );
  },
);
