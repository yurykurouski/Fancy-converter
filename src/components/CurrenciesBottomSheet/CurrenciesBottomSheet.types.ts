import { ListRenderItemInfo } from 'react-native';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { SelectedCurrencies } from 'types';

export type Props = {
  selectedCurrencies: SelectedCurrencies;
  setSelectedCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
};

export type UseBottomSheetHandlers = (
  sheetRef: React.MutableRefObject<BottomSheetMethods>,
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>,
  isKeyboardVisible: boolean,
) => {
  onPressHandler: () => void;
  onChangeHandler: (index: number) => void;
};

export type UseKeyboardHandlers = (
  isExpanded: boolean,
  sheetRef: React.MutableRefObject<BottomSheetMethods>,
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>,
  setKeyboardVisible: React.Dispatch<React.SetStateAction<boolean>>,
) => void;

export type CheckIfSeparatorIsNeeded = (
  itemName: string,
  index: number,
  avaliableCurrencies: string[],
) => boolean;

export type UseRenderListItem = (props: {
  avaliableCurrencies: string[];
  selectedCurrencies: SelectedCurrencies;
  setSelectedCurrencies: React.Dispatch<
    React.SetStateAction<SelectedCurrencies>
  >;
  isExpanded: boolean;
}) => (props: ListRenderItemInfo<string>) => JSX.Element;
