import { Alert } from 'react-native';

import { ShowNoConnectionAlert } from './utils.types';

export const showNoConnectionAlert: ShowNoConnectionAlert = (
  onPress,
  saveDate,
) => {
  Alert.alert(
    'Something went wrong',
    `No Internet connection. ${
      saveDate
        ? `Will use last stored courses from ${saveDate}.`
        : 'Check your connection please.'
    }`,
    [{ text: 'OK', onPress }],
  );
};
