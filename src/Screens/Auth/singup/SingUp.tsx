import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Instagram from '../../../constants/images/Instagram.png';
import {signstyleshhet} from './SingupStyle';
import singup from '../../../constants/images/signup.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../../type';
import useSingup from './useSingup';
import InputField from '../../../components/inputfiled/InputField';
import Button from '../../../components/button/Button';
type Params = NativeStackScreenProps<ParamsList, 'Singup'>;
export default function SingUp(
  props: NativeStackScreenProps<ParamsList, 'Singup'>,
) {
  const {
    username,
    setUserName,
    badusername,
    email,
    setEmail,
    bademail,
    password,
    setPassword,
    badpassword,
    confirmpass,
    setConfirmpass,
    signup,
    badconfirmpass,
    Googlesign,
  } = useSingup(props);

  return (
    <View style={signstyleshhet.container}>
      <ScrollView>
        <View style={signstyleshhet.sinimg}>
          <Image source={Instagram} />
        </View>
        <View style={signstyleshhet.inputdiv}>
          <InputField
            placeholder="Username"
            value={username}
            secureTextEntry={false}
            onChangeText={text => setUserName(text)}
          />
          <Text style={signstyleshhet.error}>{badusername}</Text>
          <InputField
            placeholder="Email"
            value={email}
            secureTextEntry={false}
            onChangeText={text => setEmail(text)}
          />
          <Text style={signstyleshhet.error}>{bademail}</Text>
          <InputField
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <Text style={signstyleshhet.error}>{badpassword}</Text>
          <InputField
            placeholder="Confirm Password"
            value={confirmpass}
            secureTextEntry={true}
            onChangeText={text => setConfirmpass(text)}
          />
          <Text style={signstyleshhet.error}>{badconfirmpass}</Text>
        </View>
        <View>
          <Button title="Sign Up" onPress={signup} />
          <TouchableOpacity onPress={Googlesign}>
            <Text style={signstyleshhet.google}>
              <Image source={singup} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={signstyleshhet.orcontainer}>
          <View style={signstyleshhet.line} />
          <View>
            <Text style={signstyleshhet.linetext}>OR</Text>
          </View>
          <View style={signstyleshhet.line} />
        </View>
        <View>
          <View>
            <Text style={signstyleshhet.accountheading}>
              Don’t have an account?{' '}
              <Text
                style={signstyleshhet.sign}
                onPress={() => props.navigation.navigate('Login')}>
                Log In
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
