import {View, Text, Image} from 'react-native';
import React from 'react';
import {ProfileStlye} from '../../screens/account/AccountStyle';
import Profilelock from '../../constants/images/profile.png';
import {useEditProfile} from '../../screens/editAccount/useEditAccount';
import auth from '@react-native-firebase/auth';
export default function UserProfile() {
  const {imageUrl, name, username} = useEditProfile();
  const user = auth().currentUser;
  return (
    <View>
      <View style={ProfileStlye.profileName}>
        <View style={ProfileStlye.profileimagelock}>
          <Image source={Profilelock} style={ProfileStlye.lock} />
          <Text style={ProfileStlye.nameheading}>{name}</Text>
        </View>
        <View style={ProfileStlye.profileuserimage}>
          <View>
            {user && user.providerData && user.providerData[0].photoURL ? (
              <Image
                source={{uri: user.providerData[0].photoURL}}
                style={ProfileStlye.profileimg}
              />
            ) : !imageUrl ? (
              <View style={ProfileStlye.noimageuser} />
            ) : (
              <Image
                source={{uri: imageUrl}}
                style={ProfileStlye.userimageprofile}
              />
            )}
          </View>
          <View style={ProfileStlye.userNamediv}>
            <Text style={ProfileStlye.username}>{username}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
