import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import firsticon from '../assets/images/icon/homeicon.png';
import secondicon from '../assets/images/icon/shoeicon.png';
import auth from '@react-native-firebase/auth';
import {useCreate} from '../screens/createPost/CreatePost';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Login from '../screens/auth/login/Login';
import SingUp from '../screens/auth/singup/SingUp';
import ResetPassword from '../screens/auth/resetPassword/ResetPassword';
import {ParamsList} from '../../type';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<ParamsList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Singup"
          component={SingUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reset"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Root}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Root() {
  const {pickImageAndUpload} = useCreate();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => <Image source={firsticon} />,
        }}
      />
      <Tab.Screen
        name="Create"
        component={useCreate}
        options={() => ({
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => (
            <TouchableOpacity onPress={pickImageAndUpload}>
              <Image source={secondicon} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Show"
        component={Profile}
        options={({route: focused}) => ({
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({}) => {
            const user = auth().currentUser;
            return (
              <View>
                {user?.providerData[0].photoURL ? (
                  <Image
                    source={{uri: user.providerData[0].photoURL}}
                    style={{width: 28, height: 28, borderRadius: 30}}
                  />
                ) : (
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 200,
                      backgroundColor: focused ? 'gray' : '',
                    }}></View>
                )}
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}
