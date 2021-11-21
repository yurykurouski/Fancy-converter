import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'rgba(204, 194, 220, 0.1)',
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: 'center',
    height: 60,
  },
  containerFocused: {
    borderColor: '#4F378B',
    borderWidth: 2,
  },
  title: {
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 10,
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 22,
  },
  titleFocused: {
    color: 'white',
  },
  input: {
    height: 60,
    flexGrow: 1,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
