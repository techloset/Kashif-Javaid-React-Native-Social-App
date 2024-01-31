import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { splashstyleing } from './SplashStyle';
import splashimg from '../../assets/images/splashscreen.png';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(()=>{
        navigation.navigate('Login');
    },3000)
  },[]);

  return (
    <View style={splashstyleing.container}>
      <Image source={splashimg} style={splashstyleing.logo} />
    </View>
  );
}
