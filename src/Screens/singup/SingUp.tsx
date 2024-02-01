import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import React, { useState } from 'react';
import instaimg from '../../assets/images/Instagram.png';
import { signstyleshhet } from './SingupStyle';
import signimg from '../../assets/images/signup.png';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamsList } from '../../../type';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
type Params = NativeStackScreenProps<ParamsList, 'Singup'>;

GoogleSignin.configure({
  webClientId:'<5e:8f:16:06:2e:a3:cd:2c:4a:0d:54:78:76:ba:a6:f3:8c:ab:f6:25>'
});
export default function SingUp(props:NativeStackScreenProps<ParamsList, 'Singup'>) {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');

  const [badusername, setBadusername] = useState('');
  const [bademail, setBademail] = useState('');
  const [badpassword, setBadpassword] = useState('');
  const [badconfirmpass, setBadconfirmpass] = useState('');

  const validate = () => {
    let isValid = true;

    // Username validation
    if (username === '') {
      setBadusername('Please enter a username');
      isValid = false;
    } else {
      setBadusername('');
    }

    // Email validation
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

    // Password validation
    if (password === '') {
      setBadpassword('Please enter a password');
      isValid = false;
    } else if (password.length < 8) {
      setBadpassword('Password must be at least 8 characters');
      isValid = false;
    }  else {
      setBadpassword('');
    }

    // Confirm password validation
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

  // authentication
  const handleSignUp = () => {
    if (validate()) {
      auth()
      .createUserWithEmailAndPassword(
        email,
        password,
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

// google signup code 
const googlesign = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo); 
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('User cancelled the login flow');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('Operation (e.g. sign in) is in progress already');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Play services not available or outdated');
    } else {
      console.log('Some other error happened', error);
    }
  }
}
  
  return (
    <KeyboardAvoidingView style={signstyleshhet.container}>
      <View style={signstyleshhet.sinimg}>
        <Image source={instaimg}/>
      </View>
      <View> 
        <TextInput placeholder='Username'
          value={username}
          style={signstyleshhet.inputfiled}
          onChangeText={text => setUserName(text)}
        /> 
        <Text style={{ color: 'red' }}>{badusername}</Text>
        <TextInput placeholder='Email'
          value={email}
          style={signstyleshhet.inputfiled}
          onChangeText={text => setEmail(text)}
        />
        <Text style={{ color: 'red' }}>{bademail}</Text>
        <TextInput placeholder='Password'
          value={password}
          style={signstyleshhet.inputfiled}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <Text style={{ color: 'red' }}>{badpassword}</Text>
        <TextInput placeholder='Confirm Password' 
          value={confirmpass}
          style={signstyleshhet.inputfiled}
          secureTextEntry
          onChangeText={text => setConfirmpass(text)}
        />
        <Text style={{ color: 'red' }}>{badconfirmpass}</Text>
      </View>
      <View>
        <TouchableOpacity style={signstyleshhet.signin} onPress={handleSignUp}>
          <Text style={signstyleshhet.signbutt}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={googlesign}>
        <Text style={signstyleshhet.google}><Image source={signimg}/></Text>
        </TouchableOpacity>
         
      
      </View>
      <View style={signstyleshhet.orcontainer}>
  <View style={signstyleshhet.line} />
  <View>
    <Text style={signstyleshhet.linetext}>OR</Text>
  </View>
  <View style={signstyleshhet.line} />
</View>

<View>
 <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
    <Text style={signstyleshhet.accountheading}>Don’t have an account? <Text style={signstyleshhet.sign}>Log In</Text>
    </Text>
 </TouchableOpacity>
 </View>
    </KeyboardAvoidingView>
  );
  
}