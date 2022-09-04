import React, { createContext, FC, useContext } from 'react';
import { NotificationContext } from 'context/MessageNotificationContext';
import { useGetCurrenciesExchangeCourse } from 'hooks';

import { Context } from './ExchangeCourseContext.types';

export const ExchangeCourseContext = createContext<Context | null>(null);

export const ExchangeCourseProvider: FC = props => {
  const startNotification = useContext(NotificationContext);

  const { isLoading, exchangeCourse, reloadCourses } =
    useGetCurrenciesExchangeCourse(startNotification);

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
      {props.children}
    </ExchangeCourseContext.Provider>
  );
};
