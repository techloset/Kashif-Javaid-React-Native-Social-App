import {StyleSheet} from 'react-native';
import {CUSTOM_COLORS} from '../../constants/color/colors';

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
    backgroundColor: CUSTOM_COLORS.FORGET_PASSWORD,
    marginHorizontal: 10,
  },
});
