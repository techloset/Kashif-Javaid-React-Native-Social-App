import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamsList} from '../../../type';
import {Image, TouchableOpacity} from 'react-native';
import firsticon from '../../assets/images/icon/homeicon.png';
import secondicon from '../../assets/images/icon/shoeicon.png';
import thiricon from '../../assets/images/icon/profile.png';
import HomeScreen from '../../screens/homescreen/HomeScreen';
import ShowData from '../../screens/showData/ShowData';
import Login from '../../screens/auth/login/Login';
import SingUp from '../../screens/auth/singup/SingUp';
import ResetPassword from '../../screens/auth/resetPassword/ResetPassword';
import {useAddScreen} from '../../screens/addScreen/AddScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<ParamsList>();

export default function MainNavigation() {
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
  const {pickImageAndUpload} = useAddScreen();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => <Image source={firsticon} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={useAddScreen}
        options={() => ({
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity onPress={pickImageAndUpload}>
              <Image source={secondicon} />
            </TouchableOpacity>
          ),
        })}
      />

      <Tab.Screen
        name="Show"
        component={ShowData}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => <Image source={thiricon} />,
        }}
      />
    </Tab.Navigator>
  );
}
