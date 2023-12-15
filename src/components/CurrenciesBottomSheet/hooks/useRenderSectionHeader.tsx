import React, { useCallback } from 'react';

import { SectionTitle } from '../components';
import { TSectionData } from '../CurrenciesBottomSheet.types';

export const useRenderSectionHeader = () =>
  useCallback(
    ({ section: { title } }: { section: TSectionData }) => (
      <SectionTitle value={title} />
    ),
    [],
  );
