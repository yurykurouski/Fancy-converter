import React from 'react';
import { useGetCurrenciesExchangeCourse } from 'hooks';

import { Context } from './ExchangeCourseContext.types';

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
