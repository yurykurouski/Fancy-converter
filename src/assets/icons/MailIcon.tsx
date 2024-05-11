import React, { NamedExoticComponent } from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors } from 'assets/colors';
import { TSVGIcon } from 'types';

export const MailIcon: NamedExoticComponent<TSVGIcon> = React.memo(
  ({ size, style, color }) => {
    return (
      <Svg width={size} height={size} viewBox="0 -960 960 960" style={style}>
        <Path
          d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"
          fill={color ?? Colors?.FONT_PRIMARY_COLOR}
        />
      </Svg>
    );
  },
);
