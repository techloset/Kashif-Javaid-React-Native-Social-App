import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/color/colors';
export const resetpasswordstyle = StyleSheet.create({
  container: {
    width: 375,
    height: 812,
    fontFamily: 'Roboto',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logimg: {
    marginBottom: 30,
  },
  restext: {
    textAlign: 'justify',
    padding: 3,
    color: 'black',
    fontFamily: 'Roboto-Medium',
  },
  retext: {
    marginLeft: 20,
    marginBottom: 90,
    color: 'black',
    fontFamily: 'Roboto-Medium',
  },
  inputfiled: {
    width: 335,
    marginRight: 10,
    height: 44,
    borderWidth: 0.2,
    marginTop: 10,
    borderRadius: 3,
    backgroundColor: COLORS.inputbackgroundColor,
    fontFamily: 'Roboto-Regular',
    padding: 15,
  },
  singup: {
    marginTop: '5%',
  },
  singupbutton: {
    width: 330,
    height: 44,
    marginRight: 10,
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: 'white',
    borderRadius: 3,
    backgroundColor: COLORS.forgetpassword,
  },
});
