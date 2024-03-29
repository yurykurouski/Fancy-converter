import { RefObject } from 'react';
import { SectionListData } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { TAvailableCurrenciesNames } from 'types';

export type TUseBottomSheetOnPressHandler = (
  sheetRef: RefObject<BottomSheetMethods>,
) => () => void;

export type TUseBackButtonHandler = (
  bottomSheetIndex: SharedValue<number>,
  sheetRef: RefObject<BottomSheetMethods>,
) => void;

export type TSectionData = SectionListData<
  TAvailableCurrenciesNames,
  {
    title: string;
    data: TAvailableCurrenciesNames[];
  }
>;
