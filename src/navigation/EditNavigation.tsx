import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Library from '../screens/library/Library';
import Photos from '../screens/photos/Photos';
import Videos from '../screens/videos/Videos';
import {ParamsList} from '../../type';

const Tab = createBottomTabNavigator<ParamsList>();
export function EditNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
          tabBarLabel: 'Library',
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="Photo"
        component={Photos}
        options={{
          headerShown: false,
          tabBarLabel: 'Photo',
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="Video"
        component={Videos}
        options={{
          headerShown: false,
          tabBarLabel: 'Video',
          tabBarIcon: () => null,
        }}
      />
    </Tab.Navigator>
  );
}
