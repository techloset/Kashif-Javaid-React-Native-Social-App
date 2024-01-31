import { View, Text, Image,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import instaimg from '../../assets/images/Instagram.png'
import { signstyleshhet } from './SingupStyle'
import signimg from '../../assets/images/signup.png'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ParamsList } from '../../../AllTypes'

type Params=NativeStackScreenProps<ParamsList,'Singup'>
export default function SingUp(props:Params) {
  return (
    <KeyboardAvoidingView style={signstyleshhet.container}>
      <View style={signstyleshhet.sinimg}>
        <Image source={instaimg}/>
      </View>
      <View> 
      <TextInput placeholder='Username' style={signstyleshhet.inputfiled}/> 
        <TextInput placeholder='Email' style={signstyleshhet.inputfiled}/>
        <TextInput placeholder='Password' style={signstyleshhet.inputfiled}/>
        <TextInput placeholder='Confirm Password' style={signstyleshhet.inputfiled}/>
      </View>
      <View>
      <TouchableOpacity style={signstyleshhet.signin}>
    <Text style={signstyleshhet.signbutt}>Sign Up</Text>
 </TouchableOpacity>

 <Text style={signstyleshhet.google}><Image source={signimg} /></Text>
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
  )
}