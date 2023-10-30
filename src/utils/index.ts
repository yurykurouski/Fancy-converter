import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
  TGroupByName,
} from 'types';

export * from './compareDate';
export * from './getCurrentColorTheme';
export * from './platform';
export * from './removeDuplicates';
export * from './showNoConnectionAlert';
export * from './storage';

export const groupByName: TGroupByName<
  EAvailableFiatNames | EAvailableCryptoNames
> = data =>
  data.reduce(
    (
      acc: ReturnType<
        TGroupByName<EAvailableFiatNames | EAvailableCryptoNames>
      >,
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

// export const makeSectionsData = (
//   data: ReturnType<TGroupByName<EAvailableFiatNames | EAvailableCryptoNames>>,
// ) =>
//   Object.keys(data).map(el => {
//     return {
//       title: el,
//       data: data[el],
//     };
//   });

export const makeSectionsData = (
  data: ReturnType<TGroupByName<EAvailableFiatNames | EAvailableCryptoNames>>,
) =>
  Object.keys(data)
    .map(el => {
      return [el, ...data[el]];
    })
    .flat();
