declare module '@env' {
  export const DEFAULT_API_URL: string;
  export const DEFAULT_API_DAY_RATES: string;
  export const DEFAULT_API_CITY_REQUEST: string;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export = value;
}
