import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import instimg from '../../../assets/images/Instagram.png';
import google from '../../../assets/images/Google.png';
import {loginstyle} from './LoginStyle';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {ParamsList} from '../../../../type';
import {useLogin} from './uselogin';
import InputField from '../../../components/inputfiled/InputField';
type Params = NativeStackScreenProps<ParamsList, 'Login'>;
export default function Login(props: Params) {
  const {
    bademail,
    email,
    setEmail,
    password,
    setPassword,
    badpassword,
    Loginhandle,
    Googlesign,
  } = useLogin(props);
  return (
    <View style={loginstyle.container}>
      <View>
        <View style={loginstyle.logimg}>
          <Image source={instimg} />
        </View>
        <View style={loginstyle.inputdiv}>
          <InputField
            placeholder="Email"
            value={email}
            secureTextEntry={false}
            onChangeText={text => setEmail(text)}
          />
          {bademail !== '' && (
            <Text style={loginstyle.errorText}>{bademail}</Text>
          )}
          <InputField
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          {badpassword !== '' && (
            <Text style={loginstyle.errorText}>{badpassword}</Text>
          )}
          <TouchableOpacity onPress={() => props.navigation.navigate('Reset')}>
            <Text style={loginstyle.forpassword}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={loginstyle.logindiv} onPress={Loginhandle}>
            <Text style={loginstyle.loginbutt}>Log in</Text>
          </TouchableOpacity>
          <Text style={loginstyle.googlebutt} onPress={Googlesign}>
            <Image source={google} />
          </Text>
        </View>
        <View style={loginstyle.orcontainer}>
          <View style={loginstyle.line} />
          <View>
            <Text style={loginstyle.linetext}>OR</Text>
          </View>
          <View style={loginstyle.line} />
        </View>
        <View>
          <View>
            <Text style={loginstyle.accountheading}>
              Don’t have an account?{' '}
              <Text
                style={loginstyle.sign}
                onPress={() => props.navigation.navigate('Singup')}>
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
