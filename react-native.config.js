module.exports = {
  dependencies: {
    ...(process.env.NO_FLIPPER
      ? { 'react-native-flipper': { platforms: { ios: null } } }
      : { 'react-native-flipper': { platforms: { android: null } } }),
  },
  project: {
    ios: {
      automaticPodsInstallation: true,
    },
  },
};
