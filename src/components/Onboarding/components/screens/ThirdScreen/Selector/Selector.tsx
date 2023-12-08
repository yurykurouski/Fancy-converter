import React, { FC } from 'react';
import { Animated, View } from 'react-native';
import { CheckIcon } from 'assets/icons';
import { AnimatedFlipIcon } from 'components/AnimatedFlipIcon';

import { Props } from './Selector.types';

import { useStyles } from './Selector.styles';

export const Selector: FC<Props> = ({
  withRipple = false,
  animatedHandleColorStyle,
  animatedRippleStyle,
  isSelected,
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

      <AnimatedFlipIcon
        nextState={isSelected}
        DefaultIcon={<View style={styles.flagPlaceholder} />}
        NextIcon={<CheckIcon size={30} />}
      />
    </View>
  );
};
