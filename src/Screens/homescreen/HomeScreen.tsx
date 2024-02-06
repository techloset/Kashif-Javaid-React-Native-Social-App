import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import instaimg from '../../assets/images/Instagram.png'
import profileimg from '../../assets/images/icon/profile.png'
import auth from  "@react-native-firebase/auth"
import { HomeStyle } from './HomeStyle'
export default function HomeScreen() {
  const user =auth().currentUser
  return (
   <View style={HomeStyle.container}>
    <ScrollView>
      <View style={HomeStyle.imgcontainer}>
        <Image source={instaimg} alt='img'/>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={HomeStyle.scondcontainer}>
          <View>
            <Image source={profileimg} alt='img' style={HomeStyle.img}/>
          </View>
          <View style={HomeStyle.name}>
            <Text style={HomeStyle.text1}>{user?.displayName}</Text>
            <Text>Tokyo,jpna</Text>
          </View>
        </View> 
        <Text style={HomeStyle.dots}>...</Text>
      </View>
    </ScrollView>
   </View>
  )
}

