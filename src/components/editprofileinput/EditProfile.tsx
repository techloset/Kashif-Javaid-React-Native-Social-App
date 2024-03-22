import {View, Text, TextInput, StyleSheet} from 'react-native';
import {InputType} from '../../../type';

const EditInput: React.FC<InputType> = ({
  placeholder,
  value,
  onChangeText,
  label,
}) => {
  return (
    <View style={inputStyle.container}>
      <Text style={inputStyle.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={label === 'Bio'}
        numberOfLines={label === 'Bio' ? 3 : 1}
        style={inputStyle.input}
        placeholderTextColor={inputStyle.placeholderText.color}
      />
    </View>
  );
};

export default EditInput;

export const inputStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  label: {
    marginTop: 15,
    width: 70,
    color: 'black',
    fontFamily: 'Roboto-light',
    fontSize: 15,
  },
  input: {
    width: 270,
    minHeight: 48,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    color: 'black',
    fontFamily: 'Roboto-light',
    fontSize: 16,
  },
  placeholderText: {
    color: 'black',
  },
});
