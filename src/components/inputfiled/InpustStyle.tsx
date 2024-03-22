import {StyleSheet} from 'react-native';
import {CUSTOM_COLORS} from '../../constants/color/colors';

export const InputStyle = StyleSheet.create({
  input: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  inputStyle: {
    color: 'black',
    padding: 15,
    borderWidth: 0.2,
    borderRadius: 3,
    backgroundColor: CUSTOM_COLORS.INPUT_COLOR,
    fontFamily: 'Roboto-Light',
  },
});
