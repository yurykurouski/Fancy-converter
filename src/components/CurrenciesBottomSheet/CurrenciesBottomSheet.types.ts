import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { TSetSelectedCurrencies } from 'hooks/store/types';
import { SelectedCurrencies } from 'types';

export type Props = {
  selectedCurrencies: SelectedCurrencies;
  isDrawerOpened: boolean;
};

export type UseBottomSheetHandlers = (
  sheetRef: MutableRefObject<BottomSheetMethods>,
  setIsExpanded: Dispatch<SetStateAction<boolean>>,
  isKeyboardVisible: boolean,
) => {
  onPressHandler: () => void;
  onChangeHandler: (index: number) => void;
};

export type UseKeyboardHandlers = (
  isExpanded: boolean,
  sheetRef: MutableRefObject<BottomSheetMethods>,
  setIsExpanded: Dispatch<SetStateAction<boolean>>,
  setKeyboardVisible: Dispatch<SetStateAction<boolean>>,
) => void;

export type CheckIfSeparatorIsNeeded = (
  itemName: string,
  index: number,
  availableCurrencies: string[],
) => boolean;

export type UseRenderListItem = (props: {
  availableCurrencies: string[];
  selectedCurrencies: SelectedCurrencies;
  setSelectedCurrencies: TSetSelectedCurrencies;
  isExpanded: boolean;
}) => (props: ListRenderItemInfo<string>) => JSX.Element;
