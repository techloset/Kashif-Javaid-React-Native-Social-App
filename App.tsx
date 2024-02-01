import React from 'react';
import { View } from 'react-native';
import MainNavigation from './src/Navigation/mainnavigation/MainNavigation';
import  {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
      <MainNavigation/>
  );
}
