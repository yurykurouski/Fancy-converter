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
