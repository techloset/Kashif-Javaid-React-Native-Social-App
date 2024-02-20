import React from 'react';
import {TabNavigation} from './TabNavigation';
import {EditNavigation} from './EditNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../screens/editProfile/EditProfile';
import {ParamsList} from '../../type';

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
        name="EditNavigation"
        component={EditNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editprofile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
