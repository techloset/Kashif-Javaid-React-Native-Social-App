import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color/colors';
export const InputStyle = StyleSheet.create({
  input: {
    marginHorizontal: 10,
    marginTop: 8,
  },
  inputStyle: {
    color: 'black',
    padding: 15,
    borderWidth: 0.2,
    borderRadius: 3,
    backgroundColor: COLORS.inputbackgroundColor,
    fontFamily: 'Roboto-Light',
  },
});
