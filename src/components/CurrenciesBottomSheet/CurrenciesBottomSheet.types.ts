import { Dispatch, RefObject, SetStateAction } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { AvailableCurrenciesNames } from 'types';

export type Props = {
  selectedCurrencies: AvailableCurrenciesNames[];
  isDrawerOpened: boolean;
};

export type UseBottomSheetHandlers = (
  sheetRef: RefObject<BottomSheetMethods>,
) => () => void;

export type UseKeyboardHandlers = (
  isExpanded: boolean,
  sheetRef: RefObject<BottomSheetMethods>,
  setIsExpanded: Dispatch<SetStateAction<boolean>>,
  setKeyboardVisible: Dispatch<SetStateAction<boolean>>,
) => void;

export type CheckIfSeparatorIsNeeded = (
  itemName: string,
  index: number,
  availableCurrencies: AvailableCurrenciesNames[],
) => boolean;

export type UseRenderListItem = () => (
  props: ListRenderItemInfo<AvailableCurrenciesNames>,
) => JSX.Element;
