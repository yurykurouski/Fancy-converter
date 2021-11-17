export const getOnlyCourses = exchangeCourse => {
  const onlyCurrenciesNamesValues = Object.keys(exchangeCourse[0]).filter(
    key => key.match(/_out$/) || key.match(/_in$/),
  );

  return onlyCurrenciesNamesValues.map(key => ({
    [key]: exchangeCourse[0][key],
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
