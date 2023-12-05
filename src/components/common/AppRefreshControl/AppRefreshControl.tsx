import React from 'react';
import {
  RefreshControl as RNRefreshControl,
  RefreshControlProps,
} from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

export const AppRefreshControl = ({
  refreshing,
  onRefresh,
  ...rest
}: RefreshControlProps) => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  return (
    <RNRefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      // android
      colors={[THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR]}
      progressBackgroundColor={
        THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
      }
      //ios
      tintColor={THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
      {...rest}
    />
  );
};
