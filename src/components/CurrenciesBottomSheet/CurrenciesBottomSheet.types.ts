import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { SelectedCurrencies } from 'types/avaliable-currencies';

export type Props = {
  sheetRef: React.MutableRefObject<BottomSheetMethods>;
  selectedCurrencies: SelectedCurrencies;
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
