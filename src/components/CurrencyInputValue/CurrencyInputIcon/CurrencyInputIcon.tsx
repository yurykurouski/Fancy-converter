import React from 'react';
import { CheckIcon } from 'assets/icons';
import { AnimatedFlipIcon } from 'components/AnimatedFlipIcon';
import { CountryFlag } from 'components/common/CountryFlag';
import { AvailableCurrenciesNames } from 'types';

export const CurrencyInputIcon = ({
  isSelectedForEdit,
  currencyCode,
}: {
  isSelectedForEdit: boolean;
  currencyCode: AvailableCurrenciesNames;
}) => (
  <AnimatedFlipIcon
    nextState={isSelectedForEdit}
    DefaultIcon={<CountryFlag currencyCode={currencyCode} size={30} />}
    NextIcon={<CheckIcon size={30} />}
  />
);
