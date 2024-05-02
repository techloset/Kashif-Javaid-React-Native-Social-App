import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {ProfileStlye} from './AccountStyle';
import ProfileImage from '../../constants/images/profileimg.png';
import {useProfile} from './useAccount';
import Video from 'react-native-video';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../type';
import {useEditProfile} from '../editAccount/useEditAccount';
import UserProfile from '../../components/profile/Profile';
import Editprofilebutton from '../../components/editprofilebutton/Editprofilebutton';
export default function Profile(
  props: NativeStackScreenProps<ParamsList, 'Profile'>,
) {
  const {profile, siguout} = useProfile(props);
  const {bio} = useEditProfile();

  return (
    <View style={ProfileStlye.container}>
      <View style={{flex: 1}}>
        <UserProfile />
        <View style={ProfileStlye.bio}>
          <Text style={ProfileStlye.bio}>{bio}</Text>
        </View>

        <Editprofilebutton
          name="Edit Profile"
          onPress={() => props.navigation.navigate('Editprofile')}
        />

        <Editprofilebutton name="Sign Out" onPress={siguout} />
        <View style={ProfileStlye.createbutton}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Create')}>
            <Image source={ProfileImage} alt="images" />
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
