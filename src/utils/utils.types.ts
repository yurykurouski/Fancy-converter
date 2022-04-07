export type OnlyCourses = {
  [key: string]: number;
};

export type GetCoursesForSelectedCurrencies = (
  exchangeCourse: OnlyCourses,
  selectedCurrencies: string[] | [],
) => OnlyCourses;

export type ShowNoConnectionAlert = (
  onPress?: (value?: string) => void,
  saveDate?: string,
) => void;

export type CompareDateByHour = (
  currentDate: Date,
  lastUpdateDate: Date,
) => boolean;
