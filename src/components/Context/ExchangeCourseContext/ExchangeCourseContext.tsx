import { useGetCurrenciesExchangeCourse } from 'hooks';
import React from 'react';
import { ResultFromAPI } from 'types/avaliable-currencies';

type Context = {
  currentExchangeCourseContext?: {
    currentExchangeCourse: {
      exchangeCourse: ResultFromAPI[] | null;
      isLoading: boolean;
    };
    setCurrentExchangeCourse: () => void;
  };
};

export const ExchangeCourseContext = React.createContext<Context>({});

export const ExchangeCourseProvider: React.FC = ({ children }) => {
  const { isLoading, actualExchangeCourse, reloadCourses } =
    useGetCurrenciesExchangeCourse();

  return (
    <ExchangeCourseContext.Provider
      value={{
        currentExchangeCourseContext: {
          currentExchangeCourse: {
            exchangeCourse: actualExchangeCourse,
            isLoading: isLoading,
          },
          setCurrentExchangeCourse: reloadCourses,
        },
      }}>
      {children}
    </ExchangeCourseContext.Provider>
  );
};
