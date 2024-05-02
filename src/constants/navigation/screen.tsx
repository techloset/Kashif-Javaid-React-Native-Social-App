import CreatePost from '../../screens/createpost/CreatePost';
import Home from '../../screens/homescreen/HomeScreen';
import Profile from '../../screens/account/Account';
import {Image, StyleSheet, View} from 'react-native';
import {useEditProfile} from '../../screens/editAccount/useEditAccount';
import auth from '@react-native-firebase/auth';
import {ParamsList, TabBarIconProps} from '../../../type';
import first from '../../constants/images/icon/home.png';
import seconde from '../../constants/images/icon/show.png';
import EditProfile from '../../screens/editAccount/EditAccount';
import OtherProfile from '../../screens/publicProfile/PublicProfile';
import {TabNavigation} from '../../navigation/TabNavigation';
import ResetPassword from '../../screens/authentication/resetpassword/ResetPassword';
import Login from '../../screens/authentication/login/Login';
import SingUp from '../../screens/authentication/singup/SingUp';

export const AUTH_STACK_NAVIGATION_SCREENS = {
  LOGIN: 'Login',
  SINGUP: 'Singup',
  RESET: 'Reset',
};

export const AUTH_STACK = [
  {
    name: AUTH_STACK_NAVIGATION_SCREENS.LOGIN,
    component: Login as React.FC,
  },
  {
    name: AUTH_STACK_NAVIGATION_SCREENS.SINGUP,
    component: SingUp as React.FC,
  },
  {
    name: AUTH_STACK_NAVIGATION_SCREENS.RESET,
    component: ResetPassword as React.FC,
  },
] as {
  name: keyof ParamsList;
  component: React.FC;
}[];

export const TAB_NAVIGATION_SCREENS = {
  HOME: 'HomeScreen',
  CREATE: 'Create',
  PROFILE: 'Profile',
};

export const TAB_NAVIGATION = [
  {
    name: TAB_NAVIGATION_SCREENS.HOME as keyof ParamsList,
    component: Home as React.FC,
    options: {
      headerShown: false,
      tabBarLabel: '',
      tabBarIcon: ({focused}: TabBarIconProps) => (
        <Image source={first} style={{tintColor: focused ? 'red' : 'gray'}} />
      ),
    },
  },
  {
    name: TAB_NAVIGATION_SCREENS.CREATE as keyof ParamsList,
    component: CreatePost as React.FC,
    options: {
      headerShown: false,
      tabBarLabel: '',
      tabBarIcon: ({focused}: TabBarIconProps) => (
        <Image source={seconde} style={{tintColor: focused ? 'red' : 'gray'}} />
      ),
    },
  },
  {
    name: TAB_NAVIGATION_SCREENS.PROFILE as keyof ParamsList,
    component: Profile as React.FC,
    options: {
      headerShown: false,
      tabBarLabel: '',
      tabBarIcon: () => {
        const {image} = useEditProfile();
        const user = auth().currentUser;
        return (
          <View>
            {user && user.providerData && user.providerData[0].photoURL ? (
              <Image
                source={{uri: user.providerData[0].photoURL}}
                style={ScreenStyle.google}
              />
            ) : (
              <>
                {image ? (
                  <Image source={{uri: image}} style={ScreenStyle.google} />
                ) : (
                  <View style={ScreenStyle.usernotimage} />
                )}
              </>
            )}
          </View>
        );
      },
    },
  },
] as {
  name: keyof ParamsList;
  component: React.FC;
  options: {
    headerShown: boolean;
    tabBarLabel: string;
    tabBarIcon: () => React.ReactElement;
    tabBarActiveTintColor: string;
  };
}[];

export const MAIN_STACK_NAVIGATION_SCREENS = {
  HOME: 'HomeScreen',
  EDITPROFILE: 'Editprofile',
  OTHERPROFILE: 'OtherProfile',
  RESET: 'Reset',
};

export const MAIN_STACK = [
  {
    name: MAIN_STACK_NAVIGATION_SCREENS.HOME,
    component: TabNavigation as React.FC,
  },
  {
    name: MAIN_STACK_NAVIGATION_SCREENS.EDITPROFILE,
    component: EditProfile as React.FC,
  },
  {
    name: MAIN_STACK_NAVIGATION_SCREENS.OTHERPROFILE,
    component: OtherProfile as React.FC,
  },
  {
    name: MAIN_STACK_NAVIGATION_SCREENS.RESET,
    component: ResetPassword as React.FC,
  },
] as {
  name: keyof ParamsList;
  component: React.FC;
}[];

export const ScreenStyle = StyleSheet.create({
  google: {
    width: 28,
    height: 28,
    borderRadius: 30,
  },
  usernotimage: {
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
});
