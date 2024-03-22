import {StyleSheet} from 'react-native';
import {CUSTOM_COLORS} from '../../../constants/color/colors';

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
    backgroundColor: CUSTOM_COLORS.INPUT_COLOR,
    fontFamily: 'Roboto-Light',
  },
  forpassword: {
    fontFamily: 'Roboto',
    color: CUSTOM_COLORS.FORGET_PASSWORD,
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
    backgroundColor: CUSTOM_COLORS.FORGET_PASSWORD,
    marginHorizontal: 10,
  },

  orcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 42,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: CUSTOM_COLORS.LOGIN_LINE,
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
    color: CUSTOM_COLORS.FORGET_PASSWORD,
    marginTop: 10,
  },
  errorInput: {
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginLeft: 12,
  },
  googlemain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 37,
  },
  googleicon: {
    width: 16,
    height: 16,
    marginRight: 9,
  },
  googletext: {
    color: 'black',
    fontFamily: 'Roboto-Medium',
  },
});
