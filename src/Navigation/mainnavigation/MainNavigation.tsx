import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamsList } from '../../../type';
import { Image } from 'react-native';
import firsticon from '../../assets/images/icon/homeicon.png'
import secondicon from '../../assets/images/icon/shoeicon.png'
import thiricon from '../../assets/images/icon/profile.png'
import HomeScreen from '../../screens/frontend/homescreen/HomeScreen';
import AddScreen from '../../screens/frontend/addScreen/AddScreen';
import ShowData from '../../screens/frontend/showData/ShowData';
import Login from '../../screens/auth/login/Login';
import SingUp from '../../screens/auth/singup/SingUp';
import ResetPassword from '../../screens/auth/resetPassword/ResetPassword';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<ParamsList>();

export default function MainNavigation() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Singup" component={SingUp} options={{ headerShown: false }} />
        <Stack.Screen name="Reset" component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Root} options={{ headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={firsticon
              }

            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={() => ({
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={secondicon}
            />
        
          ),
        })}
      />
      <Tab.Screen
        name="Show"
        component={ShowData}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={thiricon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

