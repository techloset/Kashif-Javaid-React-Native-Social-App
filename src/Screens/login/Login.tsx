import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import instimg from '../../assets/images/Instagram.png';
import google from '../../assets/images/Google.png';
import { loginstyle } from './LoginStyle';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { ParamsList } from '../../../type';
import auth from '@react-native-firebase/auth';

// typedefine
type Params = NativeStackScreenProps<ParamsList,'Login'>;
export default function Login(props: Params) {
  // form validation
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [bademail, setBademail] = useState('');
  const [badpassword, setBadpassword] = useState('');
  // function
  const validate = () => {
    let isValid = true;
    // email check
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
    // password check
    if (password === '') {
      setBadpassword('Please enter your Password');
      isValid = false;
    } else if (password.length < 8) {
      setBadpassword('Password must be at least 8 characters');
      isValid = false;
    }  else {
      setBadpassword('');
    }

    return isValid;
  };

  // firebase use
  const handleLogin = () => {
    if (validate()) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User signed in:', user);
          props.navigation.navigate('HomeScreen');
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
          } else {
            Alert.alert('Create account');
          }
        });
    }
  };
  
  
  return (
    <View style={loginstyle.container}>
      {/* img div */}
      <View style={loginstyle.logimg}>
        <Image source={instimg} />
      </View>
      {/* input div */}
      <View>
        <TextInput
          placeholder="Email"
          style={[loginstyle.inputstyle, bademail !== '' && loginstyle.errorInput]}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {bademail !== '' && <Text style={loginstyle.errorText}>{bademail}</Text>}

        <TextInput
          placeholder="Password"
          style={[loginstyle.inputstyle, badpassword !== '' && loginstyle.errorInput]}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        {badpassword !== '' && <Text style={loginstyle.errorText}>{badpassword}</Text>}

        <TouchableOpacity onPress={() => props.navigation.navigate('Reset')}>
          <Text style={loginstyle.forpassword}>Forgot password?</Text>
        </TouchableOpacity>

        {/* login button */}
        <TouchableOpacity style={loginstyle.logindiv} onPress={handleLogin}>
          <Text style={loginstyle.loginbutt}>Log in</Text>
        </TouchableOpacity>

        {/* google */}
        <Text style={loginstyle.googlebutt}>
          <Image source={google} />
        </Text>
      </View>

      {/* Or */}
      <View style={loginstyle.orcontainer}>
        <View style={loginstyle.line} />
        <View>
          <Text style={loginstyle.linetext}>OR</Text>
        </View>
        <View style={loginstyle.line} />
      </View>

      {/* other account navigate */}
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Singup')}>
          <Text style={loginstyle.accountheading}>
            Don’t have an account? <Text style={loginstyle.sign}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
}
