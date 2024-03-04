import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {CreateStyle} from './CreateStyle';
import upload from '../../assets/images/upload.png';
import imageupload from '../../assets/images/imageupload.png';
import InputField from '../../components/inputfiled/InputField';
import {useCreate} from './useCreate';
export default function CreatePost() {
  const {
    description,
    setDescription,
    handleImageSelect,
    imageUri,
    uploading,
    handleUpload,
  } = useCreate();
  return (
    <View style={CreateStyle.container}>
      <ScrollView>
        <View>
          <View style={CreateStyle.seccontainer}>
            <TouchableOpacity onPress={handleImageSelect}>
              <Text style={{color: 'black'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: 'black', fontSize: 16}}>
                Images
                <Image source={imageupload} />
              </Text>
            </TouchableOpacity>
            <Text></Text>
          </View>
          {imageUri ? (
            <Image
              source={{uri: imageUri}}
              resizeMode="cover"
              style={{height: 375}}
            />
          ) : (
            <TouchableOpacity
              style={{marginHorizontal: 12, marginTop: 20}}
              onPress={handleImageSelect}>
              <Image source={upload} alt="upload" />
            </TouchableOpacity>
          )}
        </View>
        <Text style={CreateStyle.Post}>Post Description</Text>
        <InputField
          placeholder="Add post description"
          value={description}
          secureTextEntry={false}
          onChangeText={text => setDescription(text)}
        />
        <TouchableOpacity
          style={CreateStyle.buttcontainer}
          onPress={handleUpload}
          disabled={uploading}>
          <Text style={CreateStyle.text}>Upload</Text>
        </TouchableOpacity>
        {uploading && <Text>Uploading...</Text>}
      </ScrollView>
    </View>
  );
}
