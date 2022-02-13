import { useGetCurrenciesExchangeCourse } from 'hooks';
import React from 'react';
import { OnlyCourses } from 'utils/utils.types';

type Context = {
  currentExchangeCourseContext?: {
    currentExchangeCourse: {
      exchangeCourse: OnlyCourses | null;
      isLoading: boolean;
    };
    setCurrentExchangeCourse: () => void;
  };
};

export const ExchangeCourseContext = React.createContext<Context>({});

export const ExchangeCourseProvider: React.FC = ({ children }) => {
  const { isLoading, exchangeCourse, reloadCourses } =
    useGetCurrenciesExchangeCourse();

  return (
    <ExchangeCourseContext.Provider
      value={{
        currentExchangeCourseContext: {
          currentExchangeCourse: {
            exchangeCourse,
            isLoading,
          },
          setCurrentExchangeCourse: reloadCourses,
        },
      }}>
      {children}
    </ExchangeCourseContext.Provider>
  );
};
