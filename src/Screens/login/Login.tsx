import React from 'react';
import { View,Text, Image,TouchableOpacity, Alert } from 'react-native';
import instimg from '../../assets/images/Instagram.png'
import google from '../../assets/images/Google.png'
import { loginstyle } from './LoginStyle';
import InputField from '../../Components/InputFild/InputFild';
import {  NativeStackScreenProps } from 'react-native-screens/native-stack';
import { ParamsList } from '../../../AllTypes';




// const hangle = () => {
//   Alert.alert("Login");
// }
type Params = NativeStackScreenProps<ParamsList, 'Login'>

export default function Login(props:Params) {
  return (
    <View style={loginstyle.container}>
      {/* img div */}
      <View style={loginstyle.logimg}>
        <Image source={instimg}/>
      </View>
      {/* input div */}
      <View >
      <InputField/>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Reset')}>
      <Text style={loginstyle.forpassword}>Forgot password?</Text>
    </TouchableOpacity>
    {/* login button */}
    <TouchableOpacity style={loginstyle.logindiv}>
    <Text style={loginstyle.loginbutt}>Log in</Text>
 </TouchableOpacity>
{/* google  */}
    <Text style={loginstyle.googlebutt}><Image source={google} /></Text>
      </View>
      {/* Or */}
      <View style={loginstyle.orcontainer}>
  <View style={loginstyle.line} />
  <View>
    <Text style={loginstyle.linetext}>OR</Text>
  </View>
  <View style={loginstyle.line} />
</View>
 {/* other account naviagte */}
 <View>
 <TouchableOpacity  onPress={() => props.navigation.navigate('Singup')}>
    <Text style={loginstyle.accountheading}>Don’t have an accoun? <Text style={loginstyle.sign}>Sign up</Text>
    </Text>
 </TouchableOpacity>
 </View>
    </View>
  )
}