import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingUp from '../screens/auth/singup/SingUp';
import Login from '../screens/auth/login/Login';
import ResetPassword from '../screens/auth/resetPassword/ResetPassword';
import {ParamsList} from '../../type';
const Stack = createNativeStackNavigator<ParamsList>();
export default function AuthScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Singup"
        component={SingUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Reset"
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
