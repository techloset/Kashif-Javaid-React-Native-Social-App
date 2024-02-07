import { Alert } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { firebase } from '@react-native-firebase/auth';
import { ParamsList } from '../../../../type';
type Params = NativeStackScreenProps<ParamsList, 'Reset'>;
export  function useRestpassword(props: Params) {
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
  return {
    changepassword,
    email,
    setEmail,
    bademail,
    setBademail
  }
}
