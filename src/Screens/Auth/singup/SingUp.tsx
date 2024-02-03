import { View, Text, Image, TextInput, TouchableOpacity,Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import instaimg from '../../../assets/images/Instagram.png';
import { signstyleshhet } from './SingupStyle';
import signimg from '../../../assets/images/signup.png';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ParamsList } from '../../../../type';
type Params = NativeStackScreenProps<ParamsList, 'Singup'>;
// google configuration
GoogleSignin.configure({
  webClientId:"753257465557-kl0kd9ng0anhf8u9rnhf3cq4qsgr0ra6.apps.googleusercontent.com",
});
export default function SingUp(props:NativeStackScreenProps<ParamsList, 'Singup'>) {

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
  const handleSignUp = async () => {
    if (validate()) {
     await auth()
      .createUserWithEmailAndPassword(
        email,
        password,
      ) 

      await auth().currentUser?.updateProfile ({
        displayName:username
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
 
//  googl signup code
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
  return (
    <View style={signstyleshhet.container}>
      <ScrollView>
      <View style={signstyleshhet.sinimg}>
        <Image source={instaimg}/>
      </View>
      <View style={signstyleshhet.inputdiv}> 
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
        <TouchableOpacity onPress={onGoogleButtonPress}>
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
 </ScrollView>
    </View>
  );
  
}