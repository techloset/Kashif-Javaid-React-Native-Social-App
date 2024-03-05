import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParamsList} from '../../type';
import {MAIN_STACK} from '../constants/navigation/screen';

const Stack = createNativeStackNavigator<ParamsList>();

export default function MainScreens() {
  return (
    <Stack.Navigator>
      {MAIN_STACK.map((item, index) => (
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
