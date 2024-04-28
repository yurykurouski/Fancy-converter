import React from 'react';
import { CheckIcon } from 'assets/icons';
import { AnimatedFlipIcon } from 'components/AnimatedFlipIcon';
import { CountryFlag } from 'components/common/CountryFlag';
import { TAvailableCurrenciesNames } from 'types';

export const CurrencyInputIcon = ({
  isSelectedForEdit,
  currencyCode,
  bookmark,
}: {
  isSelectedForEdit: boolean;
  currencyCode: TAvailableCurrenciesNames;
  bookmark: boolean;
}) => (
  <AnimatedFlipIcon
    nextState={isSelectedForEdit}
    DefaultIcon={
      <CountryFlag currencyCode={currencyCode} size={30} bookmark={bookmark} />
    }
    NextIcon={<CheckIcon size={30} />}
  />
);
