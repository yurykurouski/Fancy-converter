import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    borderRadius: 10,
    backgroundColor: '#1e2a45',
    alignSelf: 'center',
    padding: 10,
    elevation: 5,
    marginTop: '5%',
  },
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
  buttonsWrapper: {
    marginTop: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
