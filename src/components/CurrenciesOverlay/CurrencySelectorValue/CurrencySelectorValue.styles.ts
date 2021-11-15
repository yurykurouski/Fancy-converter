import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  currencyBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  currencyCode: {
    fontSize: 16,
    color: 'white',
  },
  currencyName: {
    fontSize: 14,
    color: 'grey',
  },
});
