import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

export type TEventHandler = (
  event: NativeSyntheticEvent<NativeScrollEvent>,
) => void;
