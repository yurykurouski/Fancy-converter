import { useCallback } from 'react';
import { Linking } from 'react-native';
import { useAlertMessage } from 'hooks';
import { l } from 'resources/localization';

export const useButtonOnPress = (url: string, text?: string) => {
  const withAlert = useAlertMessage();

  return useCallback(
    () => withAlert(() => Linking.openURL(url), text && l[text]),
    [text, url, withAlert],
  );
};
