import React, { NamedExoticComponent } from 'react';
import { Path, Svg } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { TSVGIcon } from 'types';

export const ShareIOsIcon: NamedExoticComponent<TSVGIcon> = React.memo(
  ({ size, style, color }) => {
    const { colorScheme } = useSelector(selectColorSchemeState);

    return (
      <Svg width={size} height={size} viewBox="0 -960 960 960" style={style}>
        <Path
          d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z"
          fill={color ?? THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
        />
      </Svg>
    );
  },
);
