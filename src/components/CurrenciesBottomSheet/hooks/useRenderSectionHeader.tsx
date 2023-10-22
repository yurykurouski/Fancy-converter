import React, { useCallback } from 'react';
import { SectionListData } from 'react-native';
import { AvailableFiatNames } from 'types';

import { SectionTitle } from '../components';

type TSection = {
  section: SectionListData<
    AvailableFiatNames,
    {
      title: string;
      data: AvailableFiatNames[];
    }
  >;
};

export const useRenderSectionHeader = () =>
  useCallback((value: string) => <SectionTitle value={value} />, []);
