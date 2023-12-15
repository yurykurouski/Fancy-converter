import React from 'react';
import { Linking, Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ReactIcon } from 'assets/icons/ReactIcon';
import { DrawerScreen } from 'components';
import { l } from 'resources/localization';

import { version } from '../../../package.json';

import { useStyles } from './DrawerCreditsScreen.styles';

export const DrawerCreditsScreen = () => {
  const styles = useStyles();

  const logoShared = useSharedValue(0);

  const openFlagLink = () =>
    Linking.openURL('https://github.com/HatScripts/circle-flags');
  const openCryptoLink = () => Linking.openURL('https://cryptologos.cc/');
  const openRatesLink = () => Linking.openURL('https://www.coinbase.com');
  const openGeocodingLink = () =>
    Linking.openURL('https://www.openstreetmap.org');

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${logoShared.value}deg`,
        },
      ],
    };
  });

  const animateLogo = () => {
    logoShared.value = withTiming(logoShared.value + 90, {
      duration: 500,
    });
  };

  return (
    <DrawerScreen>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Flag icons:</Text>
          <Text style={styles.itemContent} onPress={openFlagLink}>
            circle-flags
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Crypto logos:</Text>
          <Text style={styles.itemContent} onPress={openCryptoLink}>
            cryptologos.cc
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Exchange rates:</Text>
          <Text style={styles.itemContent} onPress={openRatesLink}>
            coinbase.com
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Geocoding:</Text>
          <Text style={styles.itemContent} onPress={openGeocodingLink}>
            openstreetmap.org
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.credsContainer}>
            <Text style={styles.creditsSmallText}>
              {l['drawer_credits-made-with']}
            </Text>
            <Text style={styles.creditsSmallText}>
              {`2023 v.${version} Yury Kurouski`}
            </Text>
          </View>
          <View style={styles.poweredContainer}>
            <Text style={[styles.itemTitle, styles.poweredText]}>
              {l.drawer_credits_powered}
            </Text>
            <Pressable onPress={animateLogo} style={styles.iconContainer}>
              <Animated.View style={[styles.iconFix, animatedStyle]}>
                <ReactIcon size={28} />
              </Animated.View>
            </Pressable>
          </View>
        </View>
      </View>
    </DrawerScreen>
  );
};
