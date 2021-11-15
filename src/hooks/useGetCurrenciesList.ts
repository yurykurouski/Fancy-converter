import React, { useEffect, useState } from 'react';
import { currenciesService } from '../services/currencies-service';

export const useGetCurrenciesList = () => {
  const [isLoading, setIsLOading] = useState(false);
  const [currenciesList, setCurrenciesList] = useState();

  // useEffect(() => {
  //   setIsLOading(true);

  //   currenciesService
  //     .getCurrencies()
  //     .then(value => setCurrenciesList(value))
  //     .then(() => setIsLOading(false));
  // }, []);

  return [isLoading, currenciesList];
};
