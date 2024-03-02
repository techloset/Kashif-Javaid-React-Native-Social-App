import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParamsList} from '../../type';
import {AUTH_STACK} from '../constants/navigation/screen';

const Stack = createNativeStackNavigator<ParamsList>();

export default function AuthScreens() {
  return (
    <Stack.Navigator>
      {AUTH_STACK.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
