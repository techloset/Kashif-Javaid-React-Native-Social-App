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
import Library from '../screens/library/Library';
import Photos from '../screens/photos/Photos';
import Videos from '../screens/videos/Videos';
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

        <Stack.Screen
          name="Library"
          component={Root1}
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
        name="Profile"
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

function Root1() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
          tabBarLabel: 'Library',
          tabBarIcon: ({focused, color, size}) => null,
        }}
      />
      <Tab.Screen
        name="Photo"
        component={Photos}
        options={{
          headerShown: false,
          tabBarLabel: 'Photo',
          tabBarIcon: ({focused, color, size}) => null,
        }}
      />
      <Tab.Screen
        name="Video"
        component={Videos}
        options={{
          headerShown: false,
          tabBarLabel: 'Video',
          tabBarIcon: ({focused, color, size}) => null,
        }}
      />
    </Tab.Navigator>
  );
}

// import React, {useState, useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from 'react-native-screens/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Image, TouchableOpacity, Text, View, Alert} from 'react-native';
// import firsticon from '../assets/images/icon/homeicon.png';
// import secondicon from '../assets/images/icon/shoeicon.png';
// import auth from '@react-native-firebase/auth';
// import {useCreate} from '../screens/createPost/CreatePost';
// import Home from '../screens/home/Home';
// import Profile from '../screens/profile/Profile';
// import Login from '../screens/auth/login/Login';
// import SingUp from '../screens/auth/singup/SingUp';
// import ResetPassword from '../screens/auth/resetPassword/ResetPassword';
// import {ParamsList} from '../../type';
// import Library from '../screens/library/Library';
// import Photos from '../screens/photos/Photos';
// import Videos from '../screens/videos/Videos';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator<ParamsList>();

// export default function Navigation() {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   function onAuthStateChanged(user: any) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   return (
//     <NavigationContainer>
//       {user ? (
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Login"
//             component={Login}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="Singup"
//             component={SingUp}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="Reset"
//             component={ResetPassword}
//             options={{headerShown: false}}
//           />
//         </Stack.Navigator>
//       ) : (
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Home"
//             component={Home}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="Library"
//             component={Root1}
//             options={{headerShown: false}}
//           />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }

// function Root() {
//   const {pickImageAndUpload} = useCreate();
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarLabel: '',
//           tabBarIcon: () => <Image source={firsticon} />,
//         }}
//       />
//       <Tab.Screen
//         name="Create"
//         component={useCreate}
//         options={() => ({
//           headerShown: false,
//           tabBarLabel: '',
//           tabBarIcon: () => (
//             <TouchableOpacity onPress={pickImageAndUpload}>
//               <Image source={secondicon} />
//             </TouchableOpacity>
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={({route: focused}) => ({
//           headerShown: false,
//           tabBarLabel: '',
//           tabBarIcon: ({}) => {
//             const user = auth().currentUser;
//             return (
//               <View>
//                 {user?.providerData[0].photoURL ? (
//                   <Image
//                     source={{uri: user.providerData[0].photoURL}}
//                     style={{width: 28, height: 28, borderRadius: 30}}
//                   />
//                 ) : (
//                   <View
//                     style={{
//                       width: 28,
//                       height: 28,
//                       borderRadius: 200,
//                       backgroundColor: focused ? 'gray' : '',
//                     }}></View>
//                 )}
//               </View>
//             );
//           },
//         })}
//       />
//     </Tab.Navigator>
//   );
// }

// function Root1() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Library"
//         component={Library}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Library',
//           tabBarIcon: ({focused, color, size}) => null,
//         }}
//       />
//       <Tab.Screen
//         name="Photo"
//         component={Photos}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Photo',
//           tabBarIcon: ({focused, color, size}) => null,
//         }}
//       />
//       <Tab.Screen
//         name="Video"
//         component={Videos}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Video',
//           tabBarIcon: ({focused, color, size}) => null,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
