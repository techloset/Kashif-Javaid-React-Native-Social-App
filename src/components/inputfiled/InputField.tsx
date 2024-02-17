import React, {useState} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import {InputStyle} from './InpustStyle';
import {InputType} from '../../../type';

const InputField: React.FC<InputType> = ({placeholder}) => {
  const [text, setText] = useState('');

  const onChange = (text: string) => {
    setText(text);
  };

  return (
    <KeyboardAvoidingView>
      <View>
        <View style={InputStyle.inputdiv}>
          <TextInput
            placeholder={placeholder}
            style={InputStyle.inputstyle}
            value={text}
            onChangeText={onChange}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputField;
