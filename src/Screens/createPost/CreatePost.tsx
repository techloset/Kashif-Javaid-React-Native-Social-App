import React from 'react';
import {View, FlatList, Image, TouchableOpacity, Text} from 'react-native';
import {useProfile} from '../profile/useProfile';
import Video from 'react-native-video';
import {ParamsList} from '../../../type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCreate} from './useCreate';

export default function CreatePost(
  props: NativeStackScreenProps<ParamsList, 'Create'>,
) {
  const {data} = useProfile();
  const {
    selectedPostIndex,
    handleCancel,
    handleNext,
    handlePostPress,
    pickImageAndUpload,
  } = useCreate();

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
            {data[selectedPostIndex].mediaType === 'image' && (
              <Image
                source={{uri: data[selectedPostIndex].downloadURL}}
                style={{flex: 1, resizeMode: 'cover'}}
              />
            )}
            {data[selectedPostIndex].mediaType === 'video' && (
              <Video
                source={{uri: data[selectedPostIndex].downloadURL}}
                style={{flex: 1}}
                resizeMode="cover"
              />
            )}
          </>
        )}
      </View>
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity onPress={pickImageAndUpload}>
            <Text
              style={{
                position: 'absolute',
                bottom: 50,
                alignSelf: 'flex-end',
                right: 10,
              }}>
              camera
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
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
