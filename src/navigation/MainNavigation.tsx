import React from 'react';
import {TabNavigation} from './TabNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../screens/editProfile/EditProfile';
import {ParamsList} from '../../type';
import OtherProfile from '../screens/otherProfile/OtherProfile';
import ResetPassword from '../screens/auth/resetPassword/ResetPassword';

const Stack = createNativeStackNavigator<ParamsList>();

export default function MainScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editprofile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtherProfile"
        component={OtherProfile}
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
