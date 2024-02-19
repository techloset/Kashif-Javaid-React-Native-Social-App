import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {EditStyle} from './EditStyle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../type';
import auth from '@react-native-firebase/auth';
import EditInput from '../../components/editprofileinput/EditProfile';
import {useEditProfile} from './useEditProfile';
export default function EditProfile(
  props: NativeStackScreenProps<ParamsList, 'Editprofile'>,
) {
  const {
    user,
    name,
    setName,
    username,
    setUserName,
    website,
    setWebsite,
    bio,
    setBio,
    email,
    setEmail,
    phone,
    setPhone,
    gender,
    setGender,
    handleEditProfile,
    profile,
  } = useEditProfile();
  return (
    <View style={EditStyle.container}>
      <ScrollView>
        <View style={EditStyle.container1}>
          <View style={EditStyle.container2}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <Text>Edit Profile</Text>
            <TouchableOpacity onPress={handleEditProfile}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={EditStyle.profilecontainer}>
          <View style={EditStyle.profilecontainer}>
            {user && user.providerData && user.providerData[0].photoURL ? (
              <Image
                source={{uri: user.providerData[0].photoURL}}
                style={EditStyle.profileimg}
              />
            ) : item && item?.downloadURL ? (
              <Image
                source={{uri: item?.downloadURL}}
                style={EditStyle.profileimg}
              />
            ) : (
              <View style={EditStyle.nonimg}></View>
            )}
          </View>

          <TouchableOpacity onPress={profile}>
            <Text style={EditStyle.photo}>Change Profile Photo</Text>
          </TouchableOpacity>
          <View style={EditStyle.line}></View>
        </View>

        <EditInput
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <EditInput
          label="Username"
          value={username}
          onChangeText={text => setUserName(text)}
        />
        <EditInput
          label="Website"
          value={website}
          onChangeText={text => setWebsite(text)}
        />
        <EditInput
          label="Bio"
          value={bio}
          onChangeText={text => setBio(text)}
        />
        <View style={EditStyle.line}></View>

        <View style={{marginTop: 14}}>
          <Text style={EditStyle.privateinformation}>Private Information</Text>
          <EditInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <EditInput
            label="Phone"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <EditInput
            label="Gender"
            value={gender}
            onChangeText={text => setGender(text)}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 44,
              justifyContent: 'center',
            }}>
            <Text>Want to change your password?</Text>
            <TouchableOpacity>
              <Text style={{color: 'skyblue'}}>Reset Password.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
