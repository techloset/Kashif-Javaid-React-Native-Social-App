import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonStyle} from './ButtonStyle';
import {ButtonProps} from '../../../type';
export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={ButtonStyle.div} onPress={props.onPress}>
      <Text style={ButtonStyle.login}>{props.title}</Text>
    </TouchableOpacity>
  );
}
