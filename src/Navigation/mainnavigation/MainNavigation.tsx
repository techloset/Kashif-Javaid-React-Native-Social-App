import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Splash from '../../Screens/splash/Splash';
import Login  from '../../Screens/login/Login';
import SingUp from '../../Screens/singup/SingUp';
import { ParamsList } from '../../../AllTypes';
import ResetPassword from '../../Screens/resetPassword/ResetPassword';

const Stack = createNativeStackNavigator<ParamsList>();
export default function MainNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Singup" component={SingUp} options={{headerShown:false}}/>
        <Stack.Screen name="Reset" component={ResetPassword} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
