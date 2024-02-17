import {StyleSheet} from 'react-native';

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgcontainer: {
    marginTop: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scondcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    marginLeft: 11,
    marginTop: 10,
    marginBottom: 10,
    width: 22,
    height: 22,
    borderRadius: 100,
    padding: 20,
  },
  name: {
    marginLeft: 11,
    marginTop: 5,
  },
  text1: {
    fontSize: 20,
    fontFamily: 'Roboto-bold',
    color: 'black',
  },
  dots: {
    marginRight: 14,
    fontSize: 20,
  },
  profileimg: {
    marginTop: 10,
    height: 350,
  },
  video: {
    height: 375,
    marginTop: 10,
  },
  like: {
    marginTop: 14,
    marginLeft: 14,
  },
  messenger: {
    marginTop: 14,
    marginLeft: 14,
  },
  save: {
    marginTop: 14,
    marginRight: 14,
  },
  placeholderText: {
    color: 'black',
    marginTop: 14,
    lineHeight: 14,
    marginLeft: 14,
  },
  img1: {
    width: 17,
    height: 17,
    marginLeft: 15,
    marginTop: 12,
    borderRadius: 100,
  },
  text2: {
    marginLeft: 5,
    marginTop: 15,
    fontWeight: '600',
    lineHeight: 14,
    fontFamily: 'Roboto-Bold.ttf',
  },
  butt: {
    gap: -10,
    flexDirection: 'row',
    marginTop: 12,
    marginRight: 50,
  },
  user: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 15,
  },
  usertext: {
    marginLeft: 3,
    textAlign: 'justify',
    lineHeight: 14,
  },
});
