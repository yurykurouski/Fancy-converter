import { Alert } from 'react-native';
import { l } from 'resources/localization';

export const useAlertMessage = () => (onPress: () => void, text?: string) =>
  Alert.alert(
    l['alert_message.open_link.title'],
    text || l['alert_message.open_link.description'],
    [
      {
        text: l['alert_message.open_link.cancel'],
        style: 'cancel',
      },
      {
        text: l['alert_message.open_link.ok'],
        onPress: onPress,
      },
    ],
  );
