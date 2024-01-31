import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import { inpstyle } from './InputStyle'
export default function InputField() {
  return (
    <View>
           <TextInput placeholder='UserName' style={inpstyle.inputstyle}/>
        <TextInput placeholder='Password' style={inpstyle.inputstyle}/>
    </View>
  );
}