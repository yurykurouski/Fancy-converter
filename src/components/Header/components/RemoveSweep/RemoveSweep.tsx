import React, { Ref, useCallback } from 'react';
import { LayoutAnimation } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { DeleteSweepIcon } from 'assets/icons';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { selectedCurrenciesActions } from 'store/selectedCurrenciesStore';
import { selectedForEditStore } from 'store/selectedForEditStore';
import { TAvailableCurrenciesNames } from 'types';
import { triggerWarningHaptic } from 'utils';
import { useSnapshot } from 'valtio';

import { styles } from './RemoveSweep.styles';

export const RemoveSweep = React.forwardRef(
  (_, listRef: Ref<FlashList<TAvailableCurrenciesNames>>) => {
    const { selectedCurrencies } = useSnapshot(selectedForEditStore);

    const handlePress = useCallback(() => {
      //@ts-expect-error
      listRef?.current?.prepareForLayoutAnimationRender();
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

      selectedCurrenciesActions.deleteAllSelected(selectedCurrencies);

      triggerWarningHaptic();
    }, [listRef, selectedCurrencies]);

    return (
      <ButtonWithIPadOSInteraction
        onPress={handlePress}
        containerStyle={styles.container}
        hitSlop={5}>
        <DeleteSweepIcon size={24} />
      </ButtonWithIPadOSInteraction>
    );
  },
);
