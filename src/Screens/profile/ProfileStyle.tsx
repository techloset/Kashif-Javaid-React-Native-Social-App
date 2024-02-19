import {StyleSheet} from 'react-native';
export const ProfileStlye = StyleSheet.create({
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
  },
  bio: {
    display: 'flex',
    flexWrap: 'nowrap',
    paddingHorizontal: 40,
    marginTop: 1,
  },
  button: {
    height: 30,
    borderRadius: 5,
    marginHorizontal: 16,
    marginTop: 15,
    borderColor: 'lightgray',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto-bold',
    lineHeight: 18,
  },
});
