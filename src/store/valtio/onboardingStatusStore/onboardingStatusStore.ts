import { proxy } from 'valtio';

type TOnBoardingStatus = {
  isOnBoarded: boolean | undefined;
};

const initialState: TOnBoardingStatus = {
  isOnBoarded: undefined,
};

export const onboardingStatusStore = proxy(initialState);

export const onboardingStatusActions = {
  setIsOnBoarded: (isOnBoarded: boolean) => {
    onboardingStatusStore.isOnBoarded = isOnBoarded;
  },
};
