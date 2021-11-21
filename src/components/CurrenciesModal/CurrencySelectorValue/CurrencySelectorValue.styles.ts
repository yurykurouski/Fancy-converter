import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  currencyBlock: {
    backgroundColor: 'rgba(204, 194, 220, 0.1)',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  currencyCode: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  currencyName: {
    fontSize: 14,
    color: 'grey',
  },
});
