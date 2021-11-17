import React from 'react';

import { useGetCurrenciesExchangeCourse } from '../../../hooks/useGetCurrenciesExchangeCourse';

export const ExchangeCourseContext = React.createContext({
  currentExchangeCourseContext: {
    currentExchangeCourse: {
      exchangeCourse: [],
      isLoading: false,
    },
    setcurrentExchangeCourse: value => value,
  },
});

export const ExchangeCourseProvider = ({ children }) => {
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
