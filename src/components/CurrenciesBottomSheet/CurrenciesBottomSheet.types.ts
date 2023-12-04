import { RefObject } from 'react';
import { SharedValue } from 'react-native-reanimated';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { EAvailableFiatNames } from 'types';

export type TUseBottomSheetOnPressHandler = (
  sheetRef: RefObject<BottomSheetMethods>,
) => () => void;

export type TUseBackButtonHandler = (
  bottomSheetIndex: SharedValue<number>,
  sheetRef: RefObject<BottomSheetMethods>,
) => void;

export type TUseRenderListItem = () => (
  item: EAvailableFiatNames,
) => JSX.Element;
