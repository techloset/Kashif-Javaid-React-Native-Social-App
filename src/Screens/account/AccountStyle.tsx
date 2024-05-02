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
    color: 'black',
    fontFamily: 'Roboto-Medium',
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
  bio: {
    marginTop: 1,
    alignItems: 'center',
    fontFamily: 'Roboto-bold',
    color: 'black',

    justifyContent: 'center',
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
  edit: {
    fontFamily: 'Roboto-bold',
    color: 'black',
    fontWeight: 'bold',
  },
  noimageuser: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  userimageprofile: {
    width: 100,
    borderRadius: 100,
    height: 100,
  },
  profileimagelock: {
    flexDirection: 'row',
  },
  profileuserimage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNamediv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  createbutton: {
    marginTop: 12,
  },
  Image: {
    width: 124,
    height: 124,
  },
  video: {
    width: 124,
    height: 124,
  },
});
