import { ShowMessage } from 'context/MessageNotificationContext/WithNotification.types';
import { SelectedCurrencies } from 'types';

export type UseHandleDeletePress = {
  setIsReadyToDelete: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCurrencies: SelectedCurrencies;
  currencyCode: string;
  setSelectedCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
  startNotification: ShowMessage;
};

export type Props = {
  isReadyToDelete: boolean;
  currencyCode: string;
  setIsReadyToDelete: React.Dispatch<React.SetStateAction<boolean>>;
};
