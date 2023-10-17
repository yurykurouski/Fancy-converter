import { RefObject } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { AvailableFlatNames } from 'types';

export type TUseBottomSheetOnPressHandler = (
  sheetRef: RefObject<BottomSheetMethods>,
) => () => void;

export type TUseBackButtonHandler = (
  bottomSheetIndex: number,
  sheetRef: RefObject<BottomSheetMethods>,
) => void;

export type UseRenderListItem = () => (
  props: ListRenderItemInfo<AvailableFlatNames>,
) => JSX.Element;
