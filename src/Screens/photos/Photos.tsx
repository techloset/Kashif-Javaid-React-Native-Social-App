import React from 'react';
import {View, FlatList, Image} from 'react-native';
import {useProfile} from '../profile/useProfile';
import auth from '@react-native-firebase/auth';
export default function Photos() {
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
            {item.downloadURL && item.mediaType !== 'video' && (
              <Image
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
