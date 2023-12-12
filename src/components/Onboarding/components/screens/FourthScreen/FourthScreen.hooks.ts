import { Dispatch, SetStateAction, useCallback } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { TAddSelectedCurr } from 'hooks/store/types';
import countryCurrencies from 'resources/countryCurrencies.json';
import { osmService } from 'services/OSM-service';
import { EAvailableFiatNames } from 'types';

export const useGetLocalCurrency = (
  addSelected: TAddSelectedCurr,
  setLocationCurrency: Dispatch<SetStateAction<string>>,
) =>
  useCallback(() => {
    Geolocation.getCurrentPosition(
      async info => {
        const data = await osmService.getCountryName(
          info.coords.latitude,
          info.coords.longitude,
        );

        const currencyCode = (
          countryCurrencies as Record<string, EAvailableFiatNames>
        )[data.address.country_code.toLocaleUpperCase()];

        addSelected(currencyCode);
        setLocationCurrency(currencyCode);
      },
      () => undefined,
      {
        enableHighAccuracy: false,
      },
    );
  }, [addSelected, setLocationCurrency]);
