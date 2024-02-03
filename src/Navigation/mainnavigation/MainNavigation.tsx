import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { ParamsList } from '../../../type';
import Login from '../../Screens/Auth/login/Login';
import SingUp from '../../Screens/Auth/singup/SingUp';
import ResetPassword from '../../Screens/Auth/resetPassword/ResetPassword';
import HomeScreen from '../../Screens/homescreen/HomeScreen';
import { View } from 'react-native';

const Stack = createNativeStackNavigator<ParamsList>();
export default function MainNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name="Singup" component={SingUp} options={{headerShown:false}}/>
        <Stack.Screen name="Reset" component={ResetPassword} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
