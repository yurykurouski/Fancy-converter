import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
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

let headerState = false;

export const useOnScrollOffsetChange = (
  setHeaderBlur: Dispatch<SetStateAction<boolean>>,
) => {
  return useCallback(
    (e: number) => {
      if (e >= 10 && !headerState) {
        headerState = true;

        setHeaderBlur(true);
      } else if (e < 10 && headerState) {
        headerState = false;

        setHeaderBlur(false);
      }
    },
    [setHeaderBlur],
  );
};
