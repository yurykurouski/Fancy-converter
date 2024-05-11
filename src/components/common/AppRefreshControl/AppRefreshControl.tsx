import React from 'react';
import {
  RefreshControl as RNRefreshControl,
  RefreshControlProps,
} from 'react-native';
import { Colors } from 'assets/colors';

export const AppRefreshControl = ({
  refreshing,
  onRefresh,
  ...rest
}: RefreshControlProps) => {
  return (
    <RNRefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      // android
      colors={[Colors?.FONT_PRIMARY_COLOR]}
      progressBackgroundColor={Colors?.APP_BACKGROUND_PRIMARY}
      //ios
      tintColor={Colors?.FONT_PRIMARY_COLOR}
      {...rest}
    />
  );
};
