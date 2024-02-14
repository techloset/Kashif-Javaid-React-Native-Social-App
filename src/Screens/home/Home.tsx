import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import instaimg from '../../../src/assets/images/Instagram.png';
import auth from '@react-native-firebase/auth';
import {HomeStyle} from './HomeStyle';
import {useHome} from './useHome';
import Like from '../../assets/images/Like.png';
import comment from '../../assets/images/Comment.png';
import messenger from '../../assets/images/Messanger.png';
import ovel from '../../assets/images/Oval.png';
import save from '../../assets/images/Save.png';
export default function Home() {
  const {data, formatDate} = useHome();
  const user = auth().currentUser;

  return (
    <View style={HomeStyle.container}>
      <ScrollView>
        <View style={HomeStyle.imgcontainer}>
          <Image source={instaimg} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={HomeStyle.scondcontainer}>
            <View>
              <View>
                {user?.providerData[0].photoURL ? (
                  <Image
                    source={{uri: user.providerData[0].photoURL}}
                    style={HomeStyle.img}
                  />
                ) : (
                  <Text style={HomeStyle.placeholderText}>Image</Text>
                )}
              </View>
            </View>
            <View style={HomeStyle.name}>
              <Text style={HomeStyle.text1}>{user?.displayName}</Text>
              <Text>Pakistan</Text>
            </View>
          </View>

          <Text style={HomeStyle.dots}>...</Text>
        </View>
        {/* <Text>{item.userName}</Text> */}
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <Image
                source={{uri: item.downloadURL}}
                accessibilityLabel="images"
                style={HomeStyle.profileimg}
              />

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <Image source={Like} style={HomeStyle.like} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={comment} style={HomeStyle.like} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={messenger} style={HomeStyle.messenger} />
                  </TouchableOpacity>
                </View>
                <View style={HomeStyle.butt}>
                  <TouchableOpacity>
                    <Image source={ovel} style={HomeStyle.like} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={ovel} style={HomeStyle.like} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={ovel} style={HomeStyle.like} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity>
                  <Image source={save} style={HomeStyle.save} />
                </TouchableOpacity>
              </View>

              <View style={{paddingHorizontal: 3}}>
                <View style={{flexDirection: 'row'}}>
                  {user?.providerData[0].photoURL ? (
                    <Image
                      source={{uri: user.providerData[0].photoURL}}
                      style={HomeStyle.img1}
                    />
                  ) : (
                    <Text style={HomeStyle.placeholderText}>Image</Text>
                  )}
                  <Text style={HomeStyle.text2}>
                    Liked by {item.userName} and 44,686 others
                  </Text>
                </View>

                <View style={HomeStyle.user}>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}>
                    <Text>
                      <Text style={{fontWeight: 'bold'}}>{item.userName}</Text>{' '}
                      The game in Japan was amazing and I want to share some
                      photos
                    </Text>
                  </View>
                </View>

                <View style={{marginLeft: 15, marginTop: 15}}>
                  {item.createdAt ? (
                    <Text>{formatDate(item.createdAt)}</Text>
                  ) : (
                    <Text>No creation date available</Text>
                  )}
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
