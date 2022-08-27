import { Alert } from 'react-native';
import { l } from 'resources/localization';

import { ShowNoConnectionAlert } from './utils.types';

export const showNoConnectionAlert: ShowNoConnectionAlert = (
  onPress,
  saveDate,
) => {
  Alert.alert(
    l['alert_message.something_wrong'],
    `${l['alert_message.something_wrong.no_connection']} ${
      saveDate
        ? `${l['alert_message.something_wrong.stored_courses']} ${saveDate}.`
        : l['alert_message.something_wrong.check_connection']
    }`,
    [{ text: l['alert_message.open_link.ok'], onPress }],
  );
};
