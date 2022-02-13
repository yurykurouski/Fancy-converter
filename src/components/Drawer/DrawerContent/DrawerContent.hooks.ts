import { Alert } from 'react-native';

export const useAlertMessage = () => (onPress: () => void) =>
  Alert.alert('Open link?', 'Link will be opened in external application', [
    {
      text: 'Ok',
      onPress: onPress,
    },
    {
      text: 'Cancel',
      style: 'cancel',
    },
  ]);
