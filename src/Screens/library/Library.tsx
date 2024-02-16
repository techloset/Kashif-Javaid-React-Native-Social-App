import React, {useState} from 'react';
import {View, FlatList, Image, TouchableOpacity, Text} from 'react-native';
import {useProfile} from '../profile/useProfile';
import Video from 'react-native-video';
import {ParamsList, Post} from '../../../type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export default function Library(
  props: NativeStackScreenProps<ParamsList, 'Library'>,
) {
  const {data} = useProfile();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostPress = (item: Post) => {
    setSelectedPost(item);
  };

  const handleCancel = () => {
    setSelectedPost(null);
  };

  //   const handleNext = () => {
  //     props.navigation.navigate('Create');
  //   };

  return (
    <View style={{flex: 1}}>
      {selectedPost && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text onPress={handleCancel}>Cancel</Text>
          <Text onPress={() => props.navigation.navigate('Create')}>Next</Text>
        </View>
      )}
      <View style={{flex: 1}}>
        {selectedPost && selectedPost.mediaType === 'image' && (
          <Image
            source={{uri: selectedPost.downloadURL}}
            style={{flex: 1, resizeMode: 'cover'}}
          />
        )}
        {selectedPost && selectedPost.mediaType === 'video' && (
          <Video
            source={{uri: selectedPost.downloadURL}}
            style={{flex: 1, resizeMode: 'cover'}}
          />
        )}
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data as Post[]}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
              {item.downloadURL && (
                <TouchableOpacity onPress={() => handlePostPress(item)}>
                  {item.mediaType === 'image' && (
                    <Image
                      source={{uri: item.downloadURL}}
                      style={{width: 124, height: 124}}
                    />
                  )}
                  {item.mediaType === 'video' && (
                    <Video
                      source={{uri: item.downloadURL}}
                      style={{width: 124, height: 124}}
                    />
                  )}
                </TouchableOpacity>
              )}
            </>
          )}
        />
      </View>
    </View>
  );
}
