import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ProfileStlye} from './ProfileStyle';
import auth from '@react-native-firebase/auth';
import profilelock from '../../assets/images/profile.png';
import profileimgs from '../../assets/images/profileimg.png';
import {useProfile} from './useProfile';
import Video from 'react-native-video';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../type';

export default function Profile(
  props: NativeStackScreenProps<ParamsList, 'Profile'>,
) {
  const user = auth().currentUser;
  const {data} = useProfile();

  return (
    <View style={ProfileStlye.container}>
      <View style={{flex: 1}}>
        <View style={ProfileStlye.profileName}>
          <View style={{flexDirection: 'row'}}>
            <Image source={profilelock} style={ProfileStlye.lock} />
            <Text style={ProfileStlye.nameheading}>{user?.displayName}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View>
              {user?.providerData[0].photoURL ? (
                <Image
                  source={{uri: user.providerData[0].photoURL}}
                  style={ProfileStlye.profileimg}
                />
              ) : (
                <View style={ProfileStlye.nonimg}></View>
              )}
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={ProfileStlye.username}>{user?.displayName}</Text>
            </View>
          </View>
        </View>
        <View style={ProfileStlye.bio}>
          <Text>
            Digital goodies designer @pixsellz Everything is designed.
          </Text>
        </View>
        <View style={{marginTop: 12}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Library')}>
            <Image source={profileimgs} alt="images" />
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={data}
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
