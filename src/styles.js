import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  StatusBarIOS: {
    height: 20,
  },
  LoginLogo: {
    height: 150,
    width: 150,
    marginTop: 130,
    marginBottom: 80,
  },
  LoginTextInput: {
    height: 20,
    width: 170,
    fontSize: 12,
    alignSelf: 'center',
  },
  Hairline: {
    height: 1,
    backgroundColor: 'black',
  },
  LoginTextInputContainer: {
    marginBottom: 55,
  },
  LoginButton: {
    backgroundColor: '#2F4B67',
    height: 30,
    width: 230,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginButtonText: {
    color: 'white',
  },
  CreateAccountText: {
    marginTop: 15,
    color: '#487891',
  }
});