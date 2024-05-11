import React, { NamedExoticComponent } from 'react';
import { Path, Svg } from 'react-native-svg';
import { Colors } from 'assets/colors';
import { TSVGIcon } from 'types';

export const CoffeeCupIcon: NamedExoticComponent<TSVGIcon> = React.memo(
  ({ size, style, color }) => {
    return (
      <Svg width={size} height={size} viewBox="0 -960 960 960" style={style}>
        <Path
          d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z"
          fill={color ?? Colors?.FONT_PRIMARY_COLOR}
        />
      </Svg>
    );
  },
);
