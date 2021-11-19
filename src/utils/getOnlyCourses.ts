export const getOnlyCourses = exchangeCourse => {
  const withBYNCourse = {
    ...exchangeCourse[0],
    BYN_in: '1',
    BYN_out: '1',
  };

  const onlyCurrenciesNamesValues = Object.keys(withBYNCourse).filter(
    key => key.match(/_out$/) || key.match(/_in$/),
  );
  return onlyCurrenciesNamesValues.map(key => ({
    [key]: withBYNCourse[key],
  }));
};

export const getCoursesForSelectedCurrencies = (
  courses,
  selectedCurrencies,
) => {
  if (selectedCurrencies.length === 0) {
    return;
  }

  const filteredCourses = courses?.filter(currencyCourse => {
    const currency = Object.keys(currencyCourse)[0];
    return getMathcedCurrency(currency, selectedCurrencies);
  });

  return filteredCourses;
};

const getMathcedCurrency = (currency, selectedCurrencies) => {
  for (let i = 0; i < selectedCurrencies.length; i++) {
    const regexp = new RegExp(`^${selectedCurrencies[i]}_(in|out)`, 'i');
    if (regexp.test(currency)) {
      return regexp.test(currency);
    }
  }
};

export const getFilteredCoursesByOperationType = (
  operationType,
  coursesForSelectedCurrencies,
) => {
  const regexp = new RegExp(`_${operationType}$`, 'i');

  return coursesForSelectedCurrencies.filter(currencyCourse => {
    const key = Object.keys(currencyCourse)[0];

    return regexp.test(key);
  });
};

export const getFormattedCourses = filteredCoursesByOperationType =>
  filteredCoursesByOperationType.reduce((acc, currency) => {
    const [currencyName, currencyCourseValue] = Object.entries(currency)[0];

    const formattedCurrencyName = currencyName.split(/_(in|out)$/)[0];

    return {
      ...acc,
      [formattedCurrencyName]: currencyCourseValue,
    };
  }, {});
