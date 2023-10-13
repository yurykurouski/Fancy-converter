import React, { useCallback } from 'react';
import { SectionListData } from 'react-native';
import { AvailableCurrenciesNames } from 'types';

import { SectionTitle } from '../components';

type TSection = {
  section: SectionListData<
    AvailableCurrenciesNames,
    {
      title: string;
      data: AvailableCurrenciesNames[];
    }
  >;
};

export const useRenderSectionHeader = () =>
  useCallback(
    ({ section }: TSection) => <SectionTitle value={section.title} />,
    [],
  );
