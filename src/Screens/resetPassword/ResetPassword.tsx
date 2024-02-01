import { View, Image, Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import instimg from '../../assets/images/Instagram.png'
import { resstyle } from './ResetStyle'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ParamsList } from '../../../type'


type Params=NativeStackScreenProps<ParamsList,'Reset'>
export default function ResetPassword(props:Params) {
  return (
    
      <View style={resstyle.container}>
      <View style={resstyle.logimg}>
        <Image source={instimg}/>
      </View>
      
      <View>
    <Text style={resstyle.restext}>Forgot your password? write your email and
     we will</Text>
     <Text style={resstyle.retext}> send you a magic link to reset your passwod</Text>
      </View>
     <View>
     <TextInput placeholder='Email' style={resstyle.inputfiled}/>
     </View>
     <TouchableOpacity style={resstyle.signin} onPress={()=>props.navigation.navigate('Singup')}>
    <Text style={resstyle.signbutt}>Send Magic Link</Text>
 </TouchableOpacity>

      </View>

  )
}