import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {ProfileStlye} from './ProfileStyle';
import auth from '@react-native-firebase/auth';
import profilelock from '../../assets/images/profile.png';
import profileimgs from '../../assets/images/profileimg.png';
import {useProfile} from './useProfile';
import Video from 'react-native-video';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../type';
import {useEditProfile} from '../editProfile/useEditProfile';

export default function Profile(
  props: NativeStackScreenProps<ParamsList, 'Profile'>,
) {
  const user = auth().currentUser;
  const {profile, siguout} = useProfile(props);
  const {image, bio, name, username} = useEditProfile();

  return (
    <View style={ProfileStlye.container}>
      <View style={{flex: 1}}>
        <View style={ProfileStlye.profileName}>
          <View style={{flexDirection: 'row'}}>
            <Image source={profilelock} style={ProfileStlye.lock} />
            <Text style={ProfileStlye.nameheading}>{username}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View>
              {user && user.providerData && user.providerData[0].photoURL ? (
                <Image
                  source={{uri: user.providerData[0].photoURL}}
                  style={ProfileStlye.profileimg}
                />
              ) : (
                !image && (
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 100,
                      backgroundColor: 'gray',
                    }}
                  />
                )
              )}
              {image && (
                <Image
                  source={{uri: image}}
                  style={{width: 100, borderRadius: 100, height: 100}}
                />
              )}
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={ProfileStlye.username}>{name}</Text>
            </View>
          </View>
        </View>
        <View style={ProfileStlye.bio}>
          <Text>{bio}</Text>
        </View>
        <View style={ProfileStlye.button}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Editprofile')}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={ProfileStlye.button}>
          <TouchableOpacity onPress={siguout}>
            <Text>Signed out</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 12}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EditNavigation')}>
            <Image source={profileimgs} alt="images" />
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={profile.data}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <>
                {item.downloadURL && item.mediaType !== 'video' && (
                  <Image
                    source={{uri: item.downloadURL}}
                    style={{
                      width: 124,
                      height: 124,
                    }}
                  />
                )}
                {item.downloadURL && item.mediaType === 'video' && (
                  <Video
                    source={{uri: item.downloadURL}}
                    style={{
                      width: 124,
                      height: 124,
                    }}
                  />
                )}
              </>
            )}
          />
        </View>
      </View>
    </View>
  );
}
