import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { CurrencySelectorValueMap } from 'components';
import React, { useCallback } from 'react';
import { Pressable, View } from 'react-native';

import { styles } from './CurrenciesBottomSheet.styles';

type Props = {
  sheetRef: React.MutableRefObject<BottomSheetMethods>;
};

export const CurrenciesBottomSheet = React.memo<Props>(({ sheetRef }) => {
  const snapPoints = [60, '100%'];

  const onPressHandler = useCallback(() => {
    sheetRef.current.snapToIndex(1);
  }, [sheetRef]);

  const renderHandle = () => (
    <View style={styles.handleContainer}>
      <Pressable style={styles.handlePressable} onPress={onPressHandler}>
        <View style={styles.handle} />
      </Pressable>
    </View>
  );

  return (
    <BottomSheet
      backgroundStyle={styles.bottomSheet}
      topInset={68}
      snapPoints={snapPoints}
      ref={sheetRef}
      handleComponent={renderHandle}>
      <BottomSheetScrollView style={{ paddingHorizontal: 10 }}>
        <CurrencySelectorValueMap />
      </BottomSheetScrollView>
    </BottomSheet>
  );
});
