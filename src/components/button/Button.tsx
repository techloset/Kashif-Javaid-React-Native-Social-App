import React from 'react';
import {ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import {ButtonProps} from '../../../type';
import {ButtonStyle} from './Buttonstyle';

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        ButtonStyle.div,
        {justifyContent: 'center', alignItems: 'center'},
      ]}
      onPress={props.onPress}
      disabled={props.loading}>
      {props.loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <Text style={ButtonStyle.login}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
}
