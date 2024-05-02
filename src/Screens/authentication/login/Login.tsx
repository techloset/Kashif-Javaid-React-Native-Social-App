import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Instagram from '../../../constants/images/Instagram.png';
import {loginstyle} from './LoginStyle';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {ParamsList} from '../../../../type';
import {useLogin} from './uselogin';
import Button from '../../../components/button/Button';
import Googleicon from '../../../constants/images/googleicon.png';
import InputField from '../../../components/authInput/InputField';
type Params = NativeStackScreenProps<ParamsList, 'Login'>;
export default function Login(props: Params) {
  const {
    bademail,
    email,
    setEmail,
    password,
    setPassword,
    badpassword,
    Loginhandle,
    Googlesign,
    isLoading,
  } = useLogin(props);

  const inputFields = [
    {
      placeholder: 'Email',
      value: email,
      onChangeText: setEmail,
      error: bademail,
    },
    {
      placeholder: 'Password',
      value: password,
      onChangeText: setPassword,
      error: badpassword,
    },
  ];

  return (
    <View style={loginstyle.container}>
      <ScrollView>
        <View style={loginstyle.logimg}>
          <Image source={Instagram} />
        </View>
        <View style={loginstyle.inputdiv}>
          {inputFields.map((field, index) => (
            <View key={index}>
              <InputField
                placeholder={field.placeholder}
                value={field.value}
                secureTextEntry={field.placeholder === 'Password'}
                onChangeText={field.onChangeText}
              />
              {field.error !== '' && (
                <Text style={loginstyle.errorText}>{field.error}</Text>
              )}
            </View>
          ))}
          <TouchableOpacity onPress={() => props.navigation.navigate('Reset')}>
            <Text style={loginstyle.forpassword}>Forgot password?</Text>
          </TouchableOpacity>
          <Button
            title="Log in"
            loading={isLoading}
            disabled={isLoading}
            onPress={Loginhandle}
          />
          <TouchableOpacity
            onPress={Googlesign}
            style={{width: 138, marginLeft: 100}}>
            <View style={loginstyle.googlemain}>
              <Image source={Googleicon} style={loginstyle.googleicon} />
              <Text style={loginstyle.googletext}>Login with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={loginstyle.orcontainer}>
          <View style={loginstyle.line} />
          <View>
            <Text style={loginstyle.linetext}>OR</Text>
          </View>
          <View style={loginstyle.line} />
        </View>
        <View>
          <View>
            <Text style={loginstyle.accountheading}>
              Don’t have an account?{' '}
              <Text
                style={loginstyle.sign}
                onPress={() => props.navigation.navigate('Singup')}>
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
