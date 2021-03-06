export enum ColorsDark {
  APP_BACKGROUND_PRIMARY = '#202124',
  FONT_PRIMARY_COLOR = 'white',
  FONT_SECONDARY_COLOR = 'white',
  FONT_COLOR_FADED = 'grey',
  ELEMENT_FADE_OR_BACKGROUND = 'rgba(204, 194, 220, 0.1)',
  ELEMENT_FADE_OR_BACKGROUND_DARKER = 'rgba(30, 29, 31, 0.3)',
  ACCENT_COLOR_LIGHTER = '#4F378B',
  ACCENT_COLOR_DARKER = '#1a1921',
  MAIN_BUTTON_COLOR = '#4F378B',
  MAIN_BUTTON_TEXT_COLOR = 'white',
}

export enum ColorsLight {
  APP_BACKGROUND_PRIMARY = '#f0f0f3',
  FONT_PRIMARY_COLOR = '#363535',
  FONT_SECONDARY_COLOR = '#fafcfe',
  FONT_COLOR_FADED = 'grey',
  ELEMENT_FADE_OR_BACKGROUND = 'rgba(87, 84, 92, 0.1)',
  ELEMENT_FADE_OR_BACKGROUND_DARKER = 'rgba(87, 84, 92, 0.1)',
  ACCENT_COLOR_LIGHTER = '#1a73e8',
  ACCENT_COLOR_DARKER = '#e9e9f0',
  MAIN_BUTTON_COLOR = '#1a73e8',
  MAIN_BUTTON_TEXT_COLOR = '#fafcfe',
}

export const THEME_COLORS = {
  light: ColorsLight,
  dark: ColorsDark,
};

export type Theme = typeof ColorsDark | typeof ColorsLight;
