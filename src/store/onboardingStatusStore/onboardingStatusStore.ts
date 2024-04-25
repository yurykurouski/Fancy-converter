import { proxy } from 'valtio';

enum EOnboardingKeys {
  IS_ONBOARDED = 'isOnBoarded',
}

type TOnboardingStatusStore = {
  [EOnboardingKeys.IS_ONBOARDED]: boolean;
};

const whiteList = [EOnboardingKeys.IS_ONBOARDED];

const initialState = {
  [EOnboardingKeys.IS_ONBOARDED]: false,
};

export const onboardingStatusStore =
  proxy<TOnboardingStatusStore>(initialState);

export const onboardingStatusActions = {
  setIsOnBoarded: function (isOnBoarded: boolean) {
    onboardingStatusStore.isOnBoarded = isOnBoarded;
  },
};

export const onboardingStoreConfig = {
  store: onboardingStatusStore,
  whiteList,
};
