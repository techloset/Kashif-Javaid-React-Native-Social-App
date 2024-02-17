import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {CreateStyle} from './CreateStyle';
import upload from '../../assets/images/upload.png';
import imageupload from '../../assets/images/imageupload.png';
import InputField from '../../components/inputfiled/InputField';
import {useCreate} from './useCreate';
import {db} from '../../config/Firebase';

export default function CreatePost() {
  const {pickImageAndUpload, setDescription} = useCreate();

  return (
    <View style={CreateStyle.container}>
      <ScrollView>
        <View style={CreateStyle.seccontainer}>
          <TouchableOpacity>
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
        <View>
          <TouchableOpacity
            style={{marginHorizontal: 12, marginTop: 20}}
            onPress={pickImageAndUpload}>
            <Image source={upload} alt="upload" />
          </TouchableOpacity>
        </View>
        <Text style={CreateStyle.Post}>Post Description</Text>
        <InputField
          placeholder="Add post description"
          onChangeText={text => setDescription(text)}
        />
        <TouchableOpacity
          style={CreateStyle.buttcontainer}
          onPress={pickImageAndUpload}>
          <Text style={CreateStyle.text}>Upload</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
