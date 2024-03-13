import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import instagram from '../../constants/images/Instagram.png';
import auth from '@react-native-firebase/auth';
import {HomeStyle} from './HomeStyle';
import {useHome} from './useHome';
import Like from '../../constants/images/Like.png';
import comment from '../../constants/images/Comment.png';
import messenger from '../../constants/images/Messenger.png';
import oval from '../../constants/images/Oval.png';
import save from '../../constants/images/Save.png';
import Video from 'react-native-video';
import {useEditProfile} from '../usereditprofile/useEditProfile';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ImageData, ParamsList} from '../../../type';
type Params = NativeStackScreenProps<ParamsList, 'HomeScreen'>;
export default function Home(props: Params) {
  const {allPosts, formatDate} = useHome();
  const user = auth().currentUser;
  const {image} = useEditProfile();
  const switchScreen = (item: ImageData) => {
    props.navigation.navigate('OtherProfile', {event: item});
  };

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.container}>
        <View style={HomeStyle.imgcontainer}>
          <Image source={instagram} />
        </View>

        <View style={HomeStyle.flatlistdiv}>
          <View style={HomeStyle.scondcontainer}>
            <View>
              <View>
                {user && user.providerData && user.providerData[0].photoURL ? (
                  <Image
                    source={{uri: user.providerData[0].photoURL}}
                    style={HomeStyle.profileimage}
                  />
                ) : !image ? (
                  <View style={HomeStyle.usernotimage} />
                ) : (
                  <Image
                    source={{uri: image}}
                    style={HomeStyle.profileimageuser}
                  />
                )}
              </View>
            </View>
            <View style={HomeStyle.name}>
              <Text style={HomeStyle.text1}>{user?.displayName}</Text>
              <Text style={{color: 'black'}}>Pakistan</Text>
            </View>
          </View>

          <Text style={HomeStyle.dots}>...</Text>
        </View>

        <FlatList
          data={allPosts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <View style={HomeStyle.param}>
                <TouchableOpacity
                  onPress={() => {
                    switchScreen(item);
                  }}>
                  <Image
                    source={{uri: item.profileImageUrl}}
                    style={HomeStyle.piture}
                  />
                </TouchableOpacity>
                <Text style={HomeStyle.username}>{item.userName}</Text>
              </View>

              {item.mediaType === 'image' ? (
                <Image
                  source={{uri: item.downloadURL}}
                  accessibilityLabel="images"
                  style={HomeStyle.profileimg}
                />
              ) : (
                <Video
                  source={{uri: item.downloadURL}}
                  style={HomeStyle.video}
                  resizeMode="cover"
                  controls={true}
                />
              )}

              <View style={HomeStyle.icons}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <Image source={Like} style={HomeStyle.like} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={comment} style={HomeStyle.like} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={messenger} style={HomeStyle.messenger} />
                  </TouchableOpacity>
                </View>
                <View style={HomeStyle.butt}>
                  <TouchableOpacity>
                    <Image source={oval} style={HomeStyle.like} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={oval} style={HomeStyle.like} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={oval} style={HomeStyle.like} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity>
                  <Image source={save} style={HomeStyle.save} />
                </TouchableOpacity>
              </View>

              <View style={{paddingHorizontal: 3}}>
                <View style={{flexDirection: 'row'}}>
                  {user?.providerData[0].photoURL ? (
                    <Image
                      source={{uri: user.providerData[0].photoURL}}
                      style={HomeStyle.img1}
                    />
                  ) : (
                    !image && <View style={HomeStyle.img1} />
                  )}
                  {image && (
                    <Image source={{uri: image}} style={HomeStyle.img1} />
                  )}
                  <Text style={HomeStyle.text2}>
                    Liked by {item.userName} and 44,686 others
                  </Text>
                </View>

                <View style={HomeStyle.userNameStyle}>
                  <View style={{}}>
                    <Text>
                      <Text style={HomeStyle.userNameStyle1}>
                        {item?.userName}
                      </Text>{' '}
                      <Text style={{color: 'black'}}>{item.description}</Text>
                    </Text>
                  </View>
                </View>
                <View style={HomeStyle.Data}>
                  <Text>{formatDate(new Date())}</Text>
                </View>
                <Text></Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}