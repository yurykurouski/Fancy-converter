import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    borderColor: 'rgba(110, 110, 110, 0.8)',
    elevation: 2,
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
  buttonTextAccept: {
    color: '#00296b',
  },
  buttonTextCancel: {
    color: '#8aa6d4',
  },
  acceptButton: {
    backgroundColor: '#98ee99',
  },
  cancelButton: {
    borderWidth: 1,
  },
});
