import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import instaimg from '../../assets/images/Instagram.png'
import auth from  "@react-native-firebase/auth"
import { HomeStyle } from './HomeStyle'
export default function HomeScreen() {
  const user =auth().currentUser
  return (
    <View style={HomeStyle.container}>
    <ScrollView>
     <View style={HomeStyle.imgheader}>
     <Image source={instaimg}/>
     </View>
     <Text>{user?.displayName}</Text>
    </ScrollView>
    </View>
  )
}

