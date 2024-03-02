import {StyleSheet} from 'react-native';

export const OtherProfileStyle = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lock: {
    marginTop: 60,
    marginRight: 3,
  },
  nameheading: {
    marginTop: 56,
  },
  profileimg: {
    justifyContent: 'center',
    alignItems: 'center',
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
  username: {
    marginTop: 11,
    alignItems: 'center',
    fontFamily: 'Roboto-bold',
    color: 'black',
    fontWeight: 'bold',
  },
  profileimageall: {
    width: 120,
    height: 100,
    marginRight: 240,
  },
});