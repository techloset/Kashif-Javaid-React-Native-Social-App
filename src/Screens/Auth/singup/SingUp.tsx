import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import instaimg from '../../../assets/images/Instagram.png';
import {signstyleshhet} from './SingupStyle';
import signimg from '../../../assets/images/signup.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ParamsList} from '../../../../type';
import useSingup from './useSingup';
type Params = NativeStackScreenProps<ParamsList, 'Singup'>;

GoogleSignin.configure({
  webClientId:
    '753257465557-kl0kd9ng0anhf8u9rnhf3cq4qsgr0ra6.apps.googleusercontent.com',
});
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
    badconfirmpass,
    handleSignUp,
    onGoogleButtonPress,
  } = useSingup(props);

  return (
    <View style={signstyleshhet.container}>
      <ScrollView>
        <View style={signstyleshhet.sinimg}>
          <Image source={instaimg} />
        </View>
        <View style={signstyleshhet.inputdiv}>
          <TextInput
            placeholder="Username"
            value={username}
            style={signstyleshhet.inputfiled}
            onChangeText={text => setUserName(text)}
          />
          <Text style={{color: 'red'}}>{badusername}</Text>
          <TextInput
            placeholder="Email"
            value={email}
            style={signstyleshhet.inputfiled}
            onChangeText={text => setEmail(text)}
          />
          <Text style={{color: 'red'}}>{bademail}</Text>
          <TextInput
            placeholder="Password"
            value={password}
            style={signstyleshhet.inputfiled}
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
          <Text style={{color: 'red'}}>{badpassword}</Text>
          <TextInput
            placeholder="Confirm Password"
            value={confirmpass}
            style={signstyleshhet.inputfiled}
            secureTextEntry
            onChangeText={text => setConfirmpass(text)}
          />
          <Text style={{color: 'red'}}>{badconfirmpass}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={signstyleshhet.signin}
            onPress={handleSignUp}>
            <Text style={signstyleshhet.signbutt}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onGoogleButtonPress}>
            <Text style={signstyleshhet.google}>
              <Image source={signimg} />
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
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={signstyleshhet.accountheading}>
              Don’t have an account?{' '}
              <Text style={signstyleshhet.sign}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
