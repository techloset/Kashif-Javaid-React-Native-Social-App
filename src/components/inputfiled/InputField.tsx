import {View, TextInput} from 'react-native';
import {InputStyle} from './InpustStyle';
import {InputType} from '../../../type';

const InputField: React.FC<InputType> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View>
      <View style={InputStyle.input}>
        <TextInput
          placeholder={placeholder}
          style={InputStyle.inputStyle}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="black"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default InputField;
