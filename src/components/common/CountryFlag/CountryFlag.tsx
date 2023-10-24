import React from 'react';
import { Image, View } from 'react-native';
import { flags } from 'assets/flagsMap';
import { BookmarkIcon } from 'assets/icons';
import { EAvailableFiatNames } from 'types';

import { useStyles } from './CountryFlag.styles';

type Props = {
  currencyCode: EAvailableFiatNames;
  size?: number;
  bookmark?: boolean;
};

export const CountryFlag = React.memo<Props>(
  ({ currencyCode, size, bookmark }) => {
    const styles = useStyles(size);

    const flagImg = flags[currencyCode];

    return (
      <View>
        <Image source={flagImg} style={styles.flagContainer} />
        {bookmark && (
          <BookmarkIcon size={8} style={styles.bookmarkIcon} fillColor="grey" />
        )}
      </View>
    );
  },
);
