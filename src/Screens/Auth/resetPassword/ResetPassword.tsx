import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import instimg from '../../../assets/images/Instagram.png';
import { resstyle } from './ResetStyle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { firebase } from '@react-native-firebase/auth';
import { ParamsList } from '../../../../type';
type Params = NativeStackScreenProps<ParamsList, 'Reset'>;
export default function ResetPassword(props: Params) {
  const [email, setEmail] = useState('');
  const [bademail, setBademail] = useState('');
  const changepassword = async () => {
    let isvalide = true;
    if (email === '') {
      setBademail('Please enter your email');
      isvalide = false;
    } else if (!email.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      setBademail('Please enter a valid email');
      isvalide = false;
    } else if (!firebase?.auth()?.currentUser?.email) {
      throw new Error('');
    } else {
      await firebase.auth().sendPasswordResetEmail(email);
      Alert.alert("Please Set Email password")
      props.navigation.navigate('Login');
    }
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
          value={email}
          onChangeText={(text)=>setEmail(text)}
        />
        <Text style={{ color: 'red' }}>{bademail}</Text>
      </View>
      <TouchableOpacity style={resstyle.signin} onPress={changepassword}>
        <Text style={resstyle.signbutt}>Send Magic Link</Text>
      </TouchableOpacity>
    </View>
  );
}
