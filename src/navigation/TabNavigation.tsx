import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useEditProfile} from '../screens/editProfile/useEditProfile';
import Home from '../screens/home/Home';
import {Image, View} from 'react-native';
import firsticon from '../assets/images/icon/homeicon.png';
import secondicon from '../assets/images/icon/shoeicon.png';
import CreatePost from '../screens/createPost/CreatePost';
import Profile from '../screens/profile/Profile';

import auth from '@react-native-firebase/auth';
import {ParamsList} from '../../type';
const Tab = createBottomTabNavigator<ParamsList>();
export function TabNavigation() {
  const {image} = useEditProfile();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => <Image source={firsticon} />,
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePost}
        options={() => ({
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => <Image source={secondicon} />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({}) => {
            const user = auth().currentUser;
            return (
              <View>
                {user && user.providerData && user.providerData[0].photoURL ? (
                  <Image
                    source={{uri: user.providerData[0].photoURL}}
                    style={{width: 28, height: 28, borderRadius: 30}}
                  />
                ) : (
                  <>
                    {image ? (
                      <Image
                        source={{uri: image}}
                        style={{borderRadius: 30, width: 28, height: 28}}
                      />
                    ) : (
                      <View
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 100,
                          backgroundColor: 'gray',
                        }}
                      />
                    )}
                  </>
                )}
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}
