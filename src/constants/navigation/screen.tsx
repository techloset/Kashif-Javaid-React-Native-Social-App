import Login from '../../screens/auth/login/Login';
import ResetPassword from '../../screens/auth/resetPassword/ResetPassword';
import SingUp from '../../screens/auth/singup/SingUp';
import CreatePost from '../../screens/createPost/CreatePost';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';
import {Image, View} from 'react-native';
import {useEditProfile} from '../../screens/editProfile/useEditProfile';
import auth from '@react-native-firebase/auth';
import {ParamsList} from '../../../type';
import firsticon from '../../constants/images/icon/homeicon.png';
import secondicon from '../../constants/images/icon/shoeicon.png';
import EditProfile from '../../screens/editProfile/EditProfile';
import OtherProfile from '../../screens/otherProfile/OtherProfile';
import {TabNavigation} from '../../navigation/TabNavigation';

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
      tabBarIcon: () => <Image source={firsticon} />,
    },
  },
  {
    name: TAB_NAVIGATION_SCREENS.CREATE as keyof ParamsList,
    component: CreatePost as React.FC,
    options: {
      headerShown: false,
      tabBarLabel: '',
      tabBarIcon: () => <Image source={secondicon} />,
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
    },
  },
] as {
  name: keyof ParamsList;
  component: React.FC;
  options: {
    headerShown: boolean;
    tabBarLabel: string;
    tabBarIcon: () => React.ReactElement;
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
