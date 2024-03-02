import {StyleSheet} from 'react-native';
import {color} from '../../constants/color/colors';

export const EditStyle = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    flex: 1,
  },
  container1: {
    height: 88,
    backgroundColor: 'lightgray',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 56,
    marginHorizontal: 12,
  },
  profilecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 19,
  },
  profileimg: {
    width: 86,
    height: 86,
    borderRadius: 100,
    marginTop: 11,
  },
  nonimg: {
    width: 86,
    height: 86,
    borderRadius: 100,
    marginTop: 11,
    backgroundColor: 'gray',
  },
  photo: {
    marginTop: 12,
    color: color.profilecolor,
    fontFamily: 'Roboto-bold',
    fontWeight: 'bold',
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    marginTop: 13,
    borderColor: 'lightgray',
  },
  privateinformation: {
    marginLeft: 16,
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: 16,
  },
  cancel: {
    color: 'black',
    fontSize: 16,
  },
  profile: {
    fontFamily: 'Roboto-bold',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  done: {
    color: color.profilecolor,
    fontFamily: 'Roboto-bold',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forget: {
    color: color.forgetpassword,
  },
});
