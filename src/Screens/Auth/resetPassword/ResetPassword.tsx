import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import Instagram from '../../../constants/images/Instagram.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../../type';
import {useRestpassword} from './useRestpassword';
import {resetpasswordstyle} from './ResetStyle';
type Params = NativeStackScreenProps<ParamsList, 'Reset'>;
export default function ResetPassword(props: Params) {
  const {email, setEmail, bademail, changepassword} = useRestpassword(props);
  return (
    <View style={resetpasswordstyle.container}>
      <View style={resetpasswordstyle.logimg}>
        <Image source={Instagram} />
      </View>
      <View>
        <Text style={resetpasswordstyle.restext}>
          Forgot your password? Write your email and we will
        </Text>
        <Text style={resetpasswordstyle.retext}>
          {' '}
          send you a magic link to reset your password
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Email"
          style={resetpasswordstyle.inputfiled}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={{color: 'red'}}>{bademail}</Text>
      </View>
      <TouchableOpacity
        style={resetpasswordstyle.singup}
        onPress={changepassword}>
        <Text style={resetpasswordstyle.singupbutton}>Send Magic Link</Text>
      </TouchableOpacity>
    </View>
  );
}
