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
import {ParamsList} from '../../../../type';
import useSingup from './useSingup';
import InputField from '../../../components/inputfiled/InputField';
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
          <Image source={instaimg} />
        </View>
        <View style={signstyleshhet.inputdiv}>
          <InputField
            placeholder="Username"
            value={username}
            onChangeText={text => setUserName(text)}
          />
          <Text style={{color: 'red', marginLeft: 12, marginTop: 4}}>
            {badusername}
          </Text>
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={{color: 'red', marginLeft: 12, marginTop: 4}}>
            {bademail}
          </Text>
          <InputField
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Text style={{color: 'red', marginLeft: 12, marginTop: 4}}>
            {badpassword}
          </Text>
          <InputField
            placeholder="Confirm Password"
            value={confirmpass}
            onChangeText={text => setConfirmpass(text)}
          />
          <Text style={{color: 'red', marginLeft: 12, marginTop: 4}}>
            {badconfirmpass}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={signstyleshhet.signin} onPress={signup}>
            <Text style={signstyleshhet.signbutt}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Googlesign}>
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
