import React, {useState} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import {InputStyle} from './InpustStyle';
import {InputType} from '../../../type';

const InputField: React.FC<InputType> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <View style={InputStyle.inputdiv}>
        <TextInput
          placeholder={placeholder}
          style={InputStyle.inputstyle}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default InputField;
