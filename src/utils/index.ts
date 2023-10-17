import { AvailableCryptoNames, AvailableFiatNames, TGroupByName } from 'types';

export * from './compareDate';
export * from './getCurrentColorTheme';
export * from './getOnlyCourses';
export * from './platform';
export * from './removeDuplicates';
export * from './showNoConnectionAlert';
export * from './storage';

export const groupByName: TGroupByName<
  AvailableFiatNames | AvailableCryptoNames
> = data =>
  data.reduce(
    (
      acc: ReturnType<TGroupByName<AvailableFiatNames | AvailableCryptoNames>>,
      el,
    ) => {
      const char = el[0];
      const prevVal = acc[char];

      return prevVal
        ? { ...acc, [char]: [...prevVal, el] }
        : { ...acc, [char]: [el] };
    },
    {},
  );

export const makeSectionsData = (
  data: ReturnType<TGroupByName<AvailableFiatNames | AvailableCryptoNames>>,
) =>
  Object.keys(data).map(el => {
    return {
      title: el,
      data: data[el],
    };
  });
