import {StyleSheet} from 'react-native';
import {CUSTOM_COLORS} from '../../../constants/color/colors';

export const signstyleshhet = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto-medium',
    alignItems: 'center',
  },
  sinimg: {
    marginTop: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputdiv: {
    paddingTop: 39,
    padding: 4,
    gap: -8,
  },
  inputfiled: {
    padding: 15,
    borderWidth: 0.2,
    borderRadius: 1,
    backgroundColor: CUSTOM_COLORS.INPUT_COLOR,
    fontFamily: 'Roboto',
  },
  signin: {
    marginTop: 20,
  },
  signbutt: {
    width: 335,
    height: 44,
    padding: 10,
    marginTop: 23,
    textAlign: 'center',
    fontFamily: 'Robot-bold',
    fontWeight: '600',
    color: 'white',
    borderRadius: 3,
    backgroundColor: CUSTOM_COLORS.FORGET_PASSWORD,
    marginHorizontal: 13,
  },
  google: {
    padding: 4,
    marginTop: 15,
    textAlign: 'center',
  },
  orcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: CUSTOM_COLORS.LOGIN_LINE,
  },
  linetext: {
    width: 50,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Roboto-Medium',
  },
  accountheading: {
    marginTop: 40,
    color: 'black',
    textAlign: 'center',
  },
  sign: {
    color: CUSTOM_COLORS.FORGET_PASSWORD,
  },
  error: {
    color: 'red',
    marginLeft: 12,
    marginTop: 4,
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
  backbutton: {
    width: 40,
  },
  backbuttonimage: {
    width: 9,
    height: 17,
    marginTop: 20,
    marginLeft: 15,
  },
});
