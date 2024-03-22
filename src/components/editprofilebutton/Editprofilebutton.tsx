import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProfileStlye} from '../../screens/profilescreen/ProfileStyle';

export default function Editprofilebutton(props: {
  name: string;
  onPress: () => void;
}) {
  return (
    <View style={ProfileStlye.button}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={ProfileStlye.edit}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
