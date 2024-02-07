import React from 'react';
import  {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainNavigation from './src/navigation/mainnavigation/MainNavigation';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
      <MainNavigation/>
  );
}
