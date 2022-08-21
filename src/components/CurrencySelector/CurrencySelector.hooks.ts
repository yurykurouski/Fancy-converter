import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export const useTrackKeyboardStatus = () => {
  const [keyBoardOpened, setKeyBoardOpened] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardOpened(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardOpened(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return keyBoardOpened;
};
