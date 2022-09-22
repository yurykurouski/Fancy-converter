import React, { FC } from 'react';
import { Animated, View } from 'react-native';

import { Props } from './Selector.types';

import { useStyles } from './Selector.styles';

export const Selector: FC<Props> = ({
  withRipple = false,
  animatedHandleColorStyle,
  animatedRippleStyle,
}) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.codeValueContainer}>
        <Animated.View
          style={[
            styles.codePlaceholder,
            withRipple && animatedHandleColorStyle,
          ]}
        />
        <View style={styles.valuePlaceholder} />
      </View>
      {withRipple && (
        <Animated.View style={[styles.rippleBaseStyle, animatedRippleStyle]} />
      )}

      <View style={styles.flagPlaceholder} />
    </View>
  );
};
