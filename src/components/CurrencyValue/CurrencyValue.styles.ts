import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  containerFocused: {
    borderColor: 'blue',
  },
  title: {
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 10,
    color: 'grey',
    fontWeight: 'bold',
  },
  input: {
    flexGrow: 1,
  },
});
