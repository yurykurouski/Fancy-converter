export type ShowMessage = (msg: string) => void;

export type UseNotificationMessage = () => {
  showMessage: ShowMessage;
  message: string;
};
