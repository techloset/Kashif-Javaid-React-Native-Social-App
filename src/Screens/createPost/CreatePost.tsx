import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {CreateStyle} from './CreateStyle';
import Upload from '../../constants/images/upload.png';
import ImageUpload from '../../constants/images/imageupload.png';
import InputField from '../../components/inputfiled/InputField';
import {useCreate} from './useCreate';
import Button from '../../components/button/Button';
export default function CreatePost() {
  const {
    description,
    setDescription,
    handleImageSelect,
    imageUri,
    uploading,
    handleUpload,
    isLoading,
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
              <Text style={CreateStyle.imagetext}>
                Images
                <Image source={ImageUpload} />
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
              style={CreateStyle.uploadedimage}
              onPress={handleImageSelect}>
              <Image source={Upload} alt="upload" />
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
        <Button
          title="Upload"
          onPress={handleUpload}
          loading={isLoading}
          disabled={isLoading}
        />
        {uploading && <Text>Uploading...</Text>}
      </ScrollView>
    </View>
  );
}
