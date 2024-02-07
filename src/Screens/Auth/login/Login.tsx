import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import instimg from '../../../assets/images/Instagram.png';
import google from '../../../assets/images/Google.png';
import { loginstyle } from './LoginStyle';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { ParamsList } from '../../../../type';
import { useLogin } from './uselogin';

type Params = NativeStackScreenProps<ParamsList,'Login'>;
export default function Login(props: Params) {
  const {bademail, email,setEmail,password,setPassword,badpassword,handleLogin,googlelogout } = useLogin(props)
  return (
    <View style={loginstyle.container}>
      <ScrollView>
      <View style={loginstyle.logimg}>
        <Image source={instimg} />
      </View>
      <View style={loginstyle.inputdiv}>
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
        <TouchableOpacity style={loginstyle.logindiv} onPress={handleLogin}>
          <Text style={loginstyle.loginbutt}>Log in</Text>
        </TouchableOpacity>
        <Text style={loginstyle.googlebutt} onPress={googlelogout}>
          <Image source={google} />
        </Text>
      </View>
      <View style={loginstyle.orcontainer}>
        <View style={loginstyle.line} />
        <View>
          <Text style={loginstyle.linetext}>OR</Text>
        </View>
        <View style={loginstyle.line} />
      </View>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Singup')}>
          <Text style={loginstyle.accountheading}>
            Don’t have an account? <Text style={loginstyle.sign}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
  
}
