import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/color/colors';
export const signstyleshhet = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto-medium',
    alignItems: 'center',
  },
  sinimg: {
    marginTop: 90,
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
    backgroundColor: COLORS.inputbackgroundColor,
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
    backgroundColor: COLORS.forgetpassword,
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
    backgroundColor: COLORS.loginline,
  },
  linetext: {
    width: 50,
    textAlign: 'center',
  },
  accountheading: {
    marginTop: 40,
    color: 'black',
    textAlign: 'center',
  },
  sign: {
    color: COLORS.forgetpassword,
  },
  error: {
    color: 'red',
    marginLeft: 12,
    marginTop: 4,
  },
});
