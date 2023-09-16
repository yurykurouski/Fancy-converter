declare module '@env' {
  export const DEFAULT_API_URL: string;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export = value;
}
