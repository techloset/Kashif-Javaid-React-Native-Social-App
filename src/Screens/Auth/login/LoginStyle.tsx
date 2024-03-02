import {StyleSheet} from 'react-native';
import {color} from '../../../constants/color/colors';

export const loginstyle = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    flex: 1,
    alignItems: 'center',
  },
  logimg: {
    marginTop: 80,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputdiv: {
    marginTop: 39,
    gap: 8,
  },
  inputstyle: {
    color: 'black',
    padding: 15,
    borderWidth: 0.2,
    borderRadius: 3,
    backgroundColor: color.inputbackgroundColor,
    fontFamily: 'Roboto-Light',
  },
  forpassword: {
    fontFamily: 'Roboto',
    color: color.forgetpassword,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 14.06,
    marginTop: 19,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  logindiv: {
    marginTop: 30,
  },
  loginbutt: {
    width: 335,
    height: 44,
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    borderRadius: 3,
    backgroundColor: color.forgetpassword,
    marginHorizontal: 10,
  },
  googlebutt: {
    padding: 4,
    marginTop: 37,
    textAlign: 'center',
  },
  orcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 42,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: color.loginline,
  },
  linetext: {
    width: 40,
    textAlign: 'center',
    color: 'black',
  },
  accountheading: {
    marginTop: 42,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Roboto-Medium',
  },
  sign: {
    color: color.forgetpassword,
    marginTop: 10,
  },
  errorInput: {
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginLeft: 12,
  },
});
