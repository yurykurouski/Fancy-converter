export {};
// export const useGetLocalCurrency = (
//   addSelected: TAddSelectedCurr,
//   setLocationCurrency: Dispatch<SetStateAction<string>>,
// ) =>
//   useCallback(() => {
//     Geolocation.getCurrentPosition(
//       async info => {
//         const data = await osmService.getCountryName(
//           info.coords.latitude,
//           info.coords.longitude,
//         );

//         const currencyCode = (
//           countryCurrencies as Record<string, EAvailableFiatNames>
//         )[data.address.country_code.toLocaleUpperCase()];

//         addSelected(currencyCode);
//         setLocationCurrency(currencyCode);
//       },
//       () => undefined,
//       {
//         enableHighAccuracy: false,
//       },
//     );
//   }, [addSelected, setLocationCurrency]);
