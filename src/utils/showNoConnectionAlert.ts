import { Alert } from 'react-native';

type ShowNoConnectionAlert = (
  onPress?: (value?: string) => void,
  saveDate?: string,
) => void;

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
