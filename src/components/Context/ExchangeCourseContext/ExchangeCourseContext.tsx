import React from 'react';

import { useGetCurrenciesExchangeCourse } from '../../../hooks/useGetCurrenciesExchangeCourse';

type Context = {
  currentExchangeCourseContext?: {
    currentExchangeCourse: {
      exchangeCourse: {}[];
      isLoading: boolean;
    };
  };
};

export const ExchangeCourseContext = React.createContext<Context>({});

export const ExchangeCourseProvider: React.FC = ({ children }) => {
  const { isLoading, actualExchangeCourse } = useGetCurrenciesExchangeCourse();

  return (
    <ExchangeCourseContext.Provider
      value={{
        currentExchangeCourseContext: {
          currentExchangeCourse: {
            exchangeCourse: actualExchangeCourse,
            isLoading: isLoading,
          },
          setcurrentExchangeCourse: useGetCurrenciesExchangeCourse,
        },
      }}>
      {children}
    </ExchangeCourseContext.Provider>
  );
};
