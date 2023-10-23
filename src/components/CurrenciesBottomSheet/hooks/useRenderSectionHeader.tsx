import React, { useCallback } from 'react';

import { SectionTitle } from '../components';

export const useRenderSectionHeader = () =>
  useCallback((value: string) => <SectionTitle value={value} />, []);
