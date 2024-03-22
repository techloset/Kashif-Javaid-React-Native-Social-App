import {StyleSheet} from 'react-native';
import {CUSTOM_COLORS} from '../../constants/color/colors';

export const CreateStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  seccontainer: {
    marginTop: 56,
    marginLeft: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Post: {
    marginTop: 22,
    marginLeft: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: 'black',
  },
  buttcontainer: {
    width: 340,
    height: 44,
    backgroundColor: CUSTOM_COLORS.FORGET_PASSWORD,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 40,
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 10,
  },
  imagetext: {
    color: 'black',
    fontSize: 16,
  },
  uploadedimage: {
    marginHorizontal: 12,
    marginTop: 20,
  },
});
