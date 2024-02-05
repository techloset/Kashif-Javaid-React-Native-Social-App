import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/homescreen/HomeScreen';
import AddScreen from '../../Screens/addScreen/AddScreen';
import ShowData from '../../Screens/showData/ShowData';
import Login from '../../Screens/Auth/login/Login';
import SingUp from '../../Screens/Auth/singup/SingUp';
import ResetPassword from '../../Screens/Auth/resetPassword/ResetPassword';
import { ParamsList } from '../../../type';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<ParamsList>();

export default function MainNavigation() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Singup" component={SingUp} options={{ headerShown: false }} />
            <Stack.Screen name="Reset" component={ResetPassword} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Add" component={AddScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Show" component={ShowData} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
