import React, {useState} from 'react';
import {View, FlatList, Image, TouchableOpacity, Text} from 'react-native';
import {useProfile} from '../profile/useProfile';
import Video from 'react-native-video';
import {ParamsList, Post} from '../../../type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useLibrary} from './uselibrary';

export default function Library(
  props: NativeStackScreenProps<ParamsList, 'Library'>,
) {
  const {
    selectedPostIndex,
    handleCancel,
    handleNext,
    data,
    isVideoPlaying,
    handlePostPress,
    setIsVideoPlaying,
  } = useLibrary(props);

  return (
    <View style={{flex: 1}}>
      {selectedPostIndex !== null && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text onPress={handleCancel}>Cancel</Text>
          <TouchableOpacity onPress={handleNext}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{flex: 1}}>
        {selectedPostIndex !== null && (
          <>
            {((data as Post[])[selectedPostIndex] as Post).mediaType ===
              'image' && (
              <Image
                source={{
                  uri: ((data as Post[])[selectedPostIndex] as Post)
                    .downloadURL,
                }}
                style={{flex: 1, resizeMode: 'cover'}}
              />
            )}
            {((data as Post[])[selectedPostIndex] as Post).mediaType ===
              'video' && (
              <Video
                source={{
                  uri: ((data as Post[])[selectedPostIndex] as Post)
                    .downloadURL,
                }}
                style={{flex: 1}}
                resizeMode="cover"
                paused={isVideoPlaying}
              />
            )}
          </>
        )}
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data as Post[]}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <>
              {item.downloadURL && (
                <TouchableOpacity onPress={() => handlePostPress(index)}>
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
