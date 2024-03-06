import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {EditStyle} from './EditStyle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../type';
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
    updatehandle,
    profileImage,
    image,
  } = useEditProfile();

  return (
    <View style={EditStyle.container}>
      <ScrollView>
        <View style={EditStyle.container1}>
          <View style={EditStyle.container2}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}>
              <Text style={EditStyle.cancel}>Cancel</Text>
            </TouchableOpacity>
            <Text style={EditStyle.profile}>Edit Profile</Text>
            <TouchableOpacity onPress={updatehandle}>
              <Text style={EditStyle.done}>Done</Text>
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
            ) : (
              <>
                {image ? (
                  <Image
                    source={{uri: image}}
                    style={EditStyle.profileuserimage}
                  />
                ) : (
                  <View style={EditStyle.noprofileimage} />
                )}
              </>
            )}
          </View>

          <TouchableOpacity onPress={profileImage}>
            <Text style={EditStyle.photo}>Change Profile Photo</Text>
          </TouchableOpacity>
          <View style={EditStyle.line}></View>
        </View>

        <EditInput
          label="Name"
          value={name}
          secureTextEntry={false}
          onChangeText={text => setName(text)}
        />
        <EditInput
          label="Username"
          value={username}
          secureTextEntry={false}
          onChangeText={text => setUserName(text)}
        />
        <EditInput
          label="Website"
          value={website}
          secureTextEntry={false}
          onChangeText={text => setWebsite(text)}
        />
        <EditInput
          label="Bio"
          value={bio}
          secureTextEntry={false}
          onChangeText={text => setBio(text)}
        />
        <View style={EditStyle.line}></View>

        <View style={{marginTop: 14}}>
          <Text style={EditStyle.privateinformation}>Private Information</Text>
          <EditInput
            label="Email"
            value={email}
            secureTextEntry={false}
            onChangeText={text => setEmail(text)}
          />
          <EditInput
            label="Phone"
            value={phone}
            secureTextEntry={false}
            onChangeText={text => setPhone(text)}
          />
          <EditInput
            label="Gender"
            value={gender}
            secureTextEntry={false}
            onChangeText={text => setGender(text)}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 44,
              justifyContent: 'center',
            }}>
            <Text>Want to change your password?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Reset')}>
              <Text style={EditStyle.forget}>Reset Password.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
