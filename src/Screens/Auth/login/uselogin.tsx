import React, { useState } from 'react';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ParamsList } from '../../../../type';
import { Alert } from 'react-native';
type Params = NativeStackScreenProps<ParamsList,'Login'>;
export function useLogin (props: Params) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [bademail, setBademail] = useState('');
  const [badpassword, setBadpassword] = useState('');
  const validate = () => {
    let isValid = true;
    if (email === '') {
      setBademail('Please enter a valid email');
      isValid = false;
    } else if (!email.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      setBademail('Please enter a valid email');
      isValid = false;
    } else {
      setBademail('');
    }
    if (password === '') {
      setBadpassword('Please enter your Password');
      isValid = false;
    } else if (password.length < 8) {
      setBadpassword('Password must be at least 8 characters');
      isValid = false;
    }
    else {
      setBadpassword('');
    }

    return isValid;
  };
  const handleLogin = () => {
    if (validate()) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User signed in:', user);
          props.navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
          } else {
            Alert.alert('Create account');
          }
        });
    }
  };
  

const googlelogout = async () => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  await GoogleSignin.signOut();
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  const user_sign = auth().signInWithCredential(googleCredential);
  user_sign
 
    .then((user) => {
      props.navigation.navigate('Home');
    })
    .catch((error) => {
      console.log(error);
    });
};
  return {
    password,
    setPassword,
    email,
    setEmail,
    bademail,
    badpassword,
    handleLogin,
    googlelogout
  };
  
}
