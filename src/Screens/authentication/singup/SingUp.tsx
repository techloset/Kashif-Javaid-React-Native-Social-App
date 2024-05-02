import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Instagram from '../../../constants/images/Instagram.png';
import {signstyleshhet} from './SingupStyle';
import Googleicon from '../../../constants/images/googleicon.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../../type';
import useSingup from './useSingup';

import Button from '../../../components/button/Button';
import Backimage from '../../../constants/images/Back.png';
import InputField from '../../../components/authInput/InputField';
type Params = NativeStackScreenProps<ParamsList, 'Singup'>;

export default function SingUp(props: Params) {
  const {
    username,
    setUserName,
    badusername,
    email,
    setEmail,
    bademail,
    password,
    setPassword,
    badpassword,
    confirmpass,
    setConfirmpass,
    signup,
    badconfirmpass,
    isLoading,
    Googlesign,
  } = useSingup(props);
  const inputFields = [
    {
      placeholder: 'Username',
      value: username,
      onChangeText: setUserName,
      error: badusername,
    },
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
    {
      placeholder: 'Confirm Password',
      value: confirmpass,
      onChangeText: setConfirmpass,
      error: badconfirmpass,
    },
  ];

  return (
    <View style={signstyleshhet.container}>
      <ScrollView>
        <TouchableOpacity
          style={signstyleshhet.backbutton}
          onPress={() => props.navigation.navigate('Login')}>
          <Image source={Backimage} style={signstyleshhet.backbuttonimage} />
        </TouchableOpacity>
        <View style={signstyleshhet.sinimg}>
          <Image source={Instagram} />
        </View>
        <View style={signstyleshhet.inputdiv}>
          {inputFields.map((field, index) => (
            <View key={index}>
              <InputField
                placeholder={field.placeholder}
                value={field.value}
                secureTextEntry={
                  field.placeholder === 'Password' ||
                  field.placeholder === 'Confirm Password'
                }
                onChangeText={field.onChangeText}
              />
              {field.error !== '' && (
                <Text style={signstyleshhet.error}>{field.error}</Text>
              )}
            </View>
          ))}
        </View>
        <View>
          <Button
            title="Sign Up"
            onPress={signup}
            loading={isLoading}
            disabled={isLoading}
          />
          <TouchableOpacity
            onPress={Googlesign}
            style={{
              width: 138,
              marginLeft: 100,
            }}>
            <View style={signstyleshhet.googlemain}>
              <Image source={Googleicon} style={signstyleshhet.googleicon} />
              <Text style={signstyleshhet.googletext}>Sign Up with Google</Text>
            </View>
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
          <View>
            <Text style={signstyleshhet.accountheading}>
              Don’t have an account?{' '}
              <Text
                style={signstyleshhet.sign}
                onPress={() => props.navigation.navigate('Login')}>
                Log In
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
