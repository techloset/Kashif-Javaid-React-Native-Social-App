import React from 'react';
import {View, FlatList} from 'react-native';
import {useProfile} from '../profile/useProfile';
import auth from '@react-native-firebase/auth';
import Video from 'react-native-video';

export default function Videos() {
  const user = auth().currentUser;
  const {data} = useProfile();
  return (
    <View>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <>
            {item.downloadURL && item.mediaType === 'video' && (
              <Video
                source={{uri: item.downloadURL}}
                style={{
                  width: 124,
                  height: 124,
                }}
              />
            )}
          </>
        )}
      />
    </View>
  );
}
