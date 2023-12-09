import { l } from 'resources/localization';

export enum DRAWER_STACK_ROUTES {
  MainScreen = 'MainScreen',
  CreditsScreen = 'CreditsScreen',
  MoreScreen = 'MoreScreen',
}

export type DrawerStackParamList = {
  [DRAWER_STACK_ROUTES.MainScreen]: undefined;
  [DRAWER_STACK_ROUTES.CreditsScreen]: undefined;
  [DRAWER_STACK_ROUTES.MoreScreen]: undefined;
};

export const DrawerStackScreens = {
  [DRAWER_STACK_ROUTES.MainScreen]: l['drawer_main-nav'],
  [DRAWER_STACK_ROUTES.CreditsScreen]: l['drawer_credits-nav'],
  [DRAWER_STACK_ROUTES.MoreScreen]: l['drawer_main_more-nav'],
};
