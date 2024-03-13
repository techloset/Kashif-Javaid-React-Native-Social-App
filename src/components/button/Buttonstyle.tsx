import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color/colors';

export const ButtonStyle = StyleSheet.create({
  div: {
    marginTop: 30,
  },
  login: {
    width: 335,
    height: 44,
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    borderRadius: 3,
    backgroundColor: COLORS.forgetpassword,
    marginHorizontal: 10,
  },
});
