import React from 'react';
import { Text, View } from 'react-native';
import { l } from 'resources/localization';

import { useStyles } from './DrawerMainSection.styles';

export const DrawerMainSection = ({ pageHeight }: { pageHeight: number }) => {
  const styles = useStyles(pageHeight);

  return (
    <View style={styles.container}>
      <View style={styles.morePlaceholder}>
        <Text style={[styles.moreText, styles.moreFirstRow]}>
          {l.drawer_placeholder_title}
        </Text>
        <Text style={[styles.moreText, styles.moreSecondRow]}>
          {l.drawer_placeholder_text}
        </Text>
      </View>
    </View>
  );
};
