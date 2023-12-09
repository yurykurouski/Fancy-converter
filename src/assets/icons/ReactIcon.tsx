import React from 'react';
import { Circle, Ellipse, G, Svg } from 'react-native-svg';
import { TSVGIcon } from 'types';

export const ReactIcon: TSVGIcon = ({ size, style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="-11.5 -10.23174 23 20.46348"
      style={style}>
      <Circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <G stroke="#61dafb" stroke-width="1" fill="none">
        <Ellipse rx="11" ry="4.2" />
        <Ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <Ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </G>
    </Svg>
  );
};
