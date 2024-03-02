import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamsList} from '../../type';
import {TAB_NAVIGATION} from '../constants/navigation/screen';

const Tab = createBottomTabNavigator<ParamsList>();

export function TabNavigation() {
  return (
    <Tab.Navigator>
      {TAB_NAVIGATION.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: item.options.tabBarIcon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
