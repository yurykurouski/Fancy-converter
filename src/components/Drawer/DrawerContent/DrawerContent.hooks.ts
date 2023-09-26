import { useCallback } from 'react';
import { Linking } from 'react-native';
import { useAlertMessage } from 'hooks';
import { l } from 'resources/localization';
import { TLocaleString } from 'types';

export const useButtonOnPress = (url: string, text?: TLocaleString) => {
  const withAlert = useAlertMessage();

  //TODO: add error handling
  return useCallback(
    () => withAlert(() => Linking.openURL(url).catch(), text && l[text]),
    [text, url, withAlert],
  );
};
