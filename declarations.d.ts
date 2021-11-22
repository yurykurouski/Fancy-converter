import React from 'react';
import { SvgProps } from 'react-native-svg';

declare module 'react-native-dotenv' {
  export const DEFAULT_API_URL: string;
  export const DEFAULT_API_CITY_REQUEST: string;
}

declare module '*.svg' {
  const content: React.FC<SvgProps>;
  export default content;
}
