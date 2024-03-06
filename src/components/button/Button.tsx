import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Buttonstyle} from './Buttonstyle';
import {ButtonProps} from '../../../type';

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={Buttonstyle.logindiv} onPress={props.onPress}>
      <Text style={Buttonstyle.loginbutt}>{props.title}</Text>
    </TouchableOpacity>
  );
}
