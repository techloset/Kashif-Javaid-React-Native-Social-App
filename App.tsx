import React from 'react';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation/Navigation';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Navigation />;
}
