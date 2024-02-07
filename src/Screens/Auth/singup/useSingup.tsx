import { View, Text, Image, TextInput, TouchableOpacity,Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ParamsList } from '../../../../type';
import { db } from '../../../config/Firebase';
type Params = NativeStackScreenProps<ParamsList, 'Singup'>;
GoogleSignin.configure({
  webClientId:"753257465557-kl0kd9ng0anhf8u9rnhf3cq4qsgr0ra6.apps.googleusercontent.com",
});
export default function useSingup(props:NativeStackScreenProps<ParamsList, 'Singup'>) {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');

  const [badusername, setBadusername] = useState('');
  const [bademail, setBademail] = useState('');
  const [badpassword, setBadpassword] = useState('');
  const [badconfirmpass, setBadconfirmpass] = useState('');

  const validate = () => {
    let isValid = true;
    if (username === '') {
      setBadusername('Please enter a username');
      isValid = false;
    } else {
      setBadusername('');
    }
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
      setBadpassword('Please enter a password');
      isValid = false;
    } else if (password.length < 8) {
      setBadpassword('Password must be at least 8 characters');
      isValid = false;
    }  else {
      setBadpassword('');
    }
    if (confirmpass === '') {
      setBadconfirmpass('Please confirm your password');
      isValid = false;
    } else if (confirmpass !== password) {
      setBadconfirmpass('Passwords do not match');
      isValid = false;
    } else {
      setBadconfirmpass('');
    }

    return isValid;
  };
  const handleSignUp = async () => {
    if (validate()) {
     await auth()
      .createUserWithEmailAndPassword(
        email,
        password,
      ) 
      db.collection('Users')
      .add({
        username,
        email,
        password,
      })
      .then(() => {
        console.log('User added!');
      });
      await auth().currentUser?.updateProfile ({
        displayName:username,
      }
      )
      .then(() => {
        Alert.alert('User account created & signed in!');
      })
      
      
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
        }
    
        console.error(error);
      });
  };
}
const onGoogleButtonPress = async () => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  const user_sign = auth().signInWithCredential(googleCredential);
  user_sign
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

console.log(auth().currentUser?.displayName)
  return {
    onGoogleButtonPress,
    handleSignUp,
    badusername,
    bademail,
    badpassword,
    badconfirmpass,
    username,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    confirmpass,
    setConfirmpass,
  }
}