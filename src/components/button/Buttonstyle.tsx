import {StyleSheet} from 'react-native';
import {color} from '../../constants/color/colors';

export const Buttonstyle = StyleSheet.create({
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
});
