import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {ProfileStlye} from './ProfileStyle';
import auth from '@react-native-firebase/auth';
import profilelock from '../../constants/images/profile.png';
import profileimgs from '../../constants/images/profileimg.png';
import {useProfile} from './useProfile';
import Video from 'react-native-video';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../type';
import {useEditProfile} from '../usereditprofile/useEditProfile';

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
          <View style={ProfileStlye.profileimagelock}>
            <Image source={profilelock} style={ProfileStlye.lock} />
            <Text style={ProfileStlye.nameheading}>{username}</Text>
          </View>
          <View style={ProfileStlye.profileuserimage}>
            <View>
              {user && user.providerData && user.providerData[0].photoURL ? (
                <Image
                  source={{uri: user.providerData[0].photoURL}}
                  style={ProfileStlye.profileimg}
                />
              ) : !image ? (
                <View style={ProfileStlye.noimageuser} />
              ) : (
                <Image
                  source={{uri: image}}
                  style={ProfileStlye.userimageprofile}
                />
              )}
            </View>
            <View style={ProfileStlye.userNamediv}>
              <Text style={ProfileStlye.username}>{name}</Text>
            </View>
          </View>
        </View>
        <View style={ProfileStlye.bio}>
          <Text style={ProfileStlye.bio}>{bio}</Text>
        </View>
        <View style={ProfileStlye.button}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Editprofile')}>
            <Text style={ProfileStlye.edit}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={ProfileStlye.button}>
          <TouchableOpacity onPress={siguout}>
            <Text style={ProfileStlye.edit}>Signed out</Text>
          </TouchableOpacity>
        </View>

        <View style={ProfileStlye.createbutton}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Create')}>
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
                    style={ProfileStlye.Image}
                  />
                )}
                {item.downloadURL && item.mediaType === 'video' && (
                  <Video
                    source={{uri: item.downloadURL}}
                    style={ProfileStlye.video}
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
