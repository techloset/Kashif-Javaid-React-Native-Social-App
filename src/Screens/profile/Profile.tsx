import React, {useState} from 'react';
import {View, ScrollView, Text, Image, FlatList} from 'react-native';
import {ProfileStlye} from './ProfileStyle';
import auth from '@react-native-firebase/auth';
import profilelock from '../../assets/images/profile.png';
import profileimgs from '../../assets/images/profileimg.png';
import {useHome} from '../home/useHome';
export default function Profile() {
  const [numColumns, setNumColumns] = useState(3);
  const user = auth().currentUser;
  const {data} = useHome();
  return (
    <View style={ProfileStlye.container}>
      <ScrollView>
        <View style={ProfileStlye.profileName}>
          <View style={{flexDirection: 'row'}}>
            <Image source={profilelock} style={ProfileStlye.lock} />
            <Text style={ProfileStlye.nameheading}>{user?.displayName}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View>
              {user?.providerData[0].photoURL ? (
                <Image
                  source={{uri: user.providerData[0].photoURL}}
                  style={ProfileStlye.profileimg}
                />
              ) : (
                <View style={ProfileStlye.nonimg}></View>
              )}
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={ProfileStlye.username}>{user?.displayName}</Text>
            </View>
          </View>
        </View>
        <View style={ProfileStlye.bio}>
          <Text>
            Digital goodies designer @pixsellz Everything is designed.
          </Text>
        </View>
        <View style={{marginTop: 12}}>
          <Image source={profileimgs} alt="images" />
        </View>

        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            style={{flexGrow: 1, flexWrap: 'wrap'}}
            numColumns={3}
            renderItem={({item}) => (
              <Image
                source={{uri: item.downloadURL}}
                accessibilityLabel="images"
                style={{
                  width: 124,
                  height: 124,
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
