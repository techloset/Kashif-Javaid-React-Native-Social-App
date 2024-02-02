import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import instimg from '../../assets/images/Instagram.png';
import { resstyle } from './ResetStyle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamsList } from '../../../type';
import { firebase } from '@react-native-firebase/auth';
type Params = NativeStackScreenProps<ParamsList, 'Reset'>;


export default function ResetPassword(props: Params) {

  const changepassword = () => {
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email).then(() => {
      Alert.alert("Password reset successfully");
    });
  };
  
  return (
    <View style={resstyle.container}>
      <View style={resstyle.logimg}>
        <Image source={instimg} />
      </View>

      <View>
        <Text style={resstyle.restext}>Forgot your password? Write your email and we will</Text>
        <Text style={resstyle.retext}> send you a magic link to reset your password</Text>
      </View>
      
      <View>
        <TextInput
          placeholder="Email"
          style={resstyle.inputfiled}
        />
      </View>
      
      <TouchableOpacity style={resstyle.signin} onPress={changepassword}>
        <Text style={resstyle.signbutt}>Send Magic Link</Text>
      </TouchableOpacity>
    </View>
  );
}
