import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import React from 'react';
import instaimg from '../../../assets/images/Instagram.png';
import auth from "@react-native-firebase/auth";
import { HomeStyle } from './HomeStyle';
import { useHome } from './useHome';

export default function HomeScreen() {
  const { data } = useHome();
  const user = auth().currentUser;

  return (
    <View style={HomeStyle.container}>
      <ScrollView>
        <View style={HomeStyle.imgcontainer}>
          <Image source={instaimg} alt='img'/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={HomeStyle.scondcontainer}>
            <View>
              <View>
                <Image
                  source={{ uri: user?.providerData[0].photoURL }}
                  style={HomeStyle.img}
                />
              </View>
            </View>
            <View style={HomeStyle.name}>
              <Text style={HomeStyle.text1}>{user?.displayName}</Text>
            </View>
          </View> 
          <Text style={HomeStyle.dots}>...</Text>
        </View>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id} 
            renderItem={({ item }) => (
              <Image source={{ uri: item.downloadURL }} alt='images' style={{width:100,height:100}}/>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
