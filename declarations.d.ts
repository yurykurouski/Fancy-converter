declare module '@env' {
  export const DEFAULT_API_URL: string;
  export const OSM_API_URL: string;
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export = value;
}

declare type VoidFunction = () => void;
