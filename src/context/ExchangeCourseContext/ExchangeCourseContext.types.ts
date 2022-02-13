import { OnlyCourses } from 'utils/utils.types';

export type Context = {
  currentExchangeCourseContext?: {
    currentExchangeCourse: {
      exchangeCourse: OnlyCourses | null;
      isLoading: boolean;
    };
    setCurrentExchangeCourse: () => void;
  };
};
