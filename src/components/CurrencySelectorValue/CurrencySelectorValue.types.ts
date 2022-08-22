export type UseOnPressHandler = (
  isExpanded: boolean,
  isActive: boolean,
  modalSelectedCurrencies: string[] | [],
  currencyCode: string,
  setModalSelectedCurrencies: React.Dispatch<
    React.SetStateAction<string[] | []>
  >,
) => () => void;

export type Props = {
  currencyCode: string;
  modalSelectedCurrencies: string[] | [];
  setModalSelectedCurrencies: React.Dispatch<
    React.SetStateAction<string[] | []>
  >;
  isExpanded: boolean;
};
