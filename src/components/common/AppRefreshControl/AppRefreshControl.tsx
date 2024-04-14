import React from 'react';
import {
  RefreshControl as RNRefreshControl,
  RefreshControlProps,
} from 'react-native';
import { THEME_COLORS } from 'assets/colors';
import { colorSchemeStore } from 'store/valtio/colorSchemeStore';
import { useSnapshot } from 'valtio';

export const AppRefreshControl = ({
  refreshing,
  onRefresh,
  ...rest
}: RefreshControlProps) => {
  const { colorScheme } = useSnapshot(colorSchemeStore);

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
