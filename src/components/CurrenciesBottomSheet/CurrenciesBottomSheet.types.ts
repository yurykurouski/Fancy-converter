import { RefObject } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { AvailableFiatNames } from 'types';

export type TUseBottomSheetOnPressHandler = (
  sheetRef: RefObject<BottomSheetMethods>,
) => () => void;

export type TUseBackButtonHandler = (
  bottomSheetIndex: number,
  sheetRef: RefObject<BottomSheetMethods>,
) => void;

export type TUseRenderListItem = () => (
  item: AvailableFiatNames,
) => JSX.Element;
