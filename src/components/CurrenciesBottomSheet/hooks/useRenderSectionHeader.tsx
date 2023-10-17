import React, { useCallback } from 'react';
import { SectionListData } from 'react-native';
import { AvailableFlatNames } from 'types';

import { SectionTitle } from '../components';

type TSection = {
  section: SectionListData<
    AvailableFlatNames,
    {
      title: string;
      data: AvailableFlatNames[];
    }
  >;
};

export const useRenderSectionHeader = () =>
  useCallback(
    ({ section }: TSection) => <SectionTitle value={section.title} />,
    [],
  );
