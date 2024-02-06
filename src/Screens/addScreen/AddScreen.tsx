import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { launchImageLibrary, ImagePickerResponse, ImageLibraryOptions, launchCamera } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

export default function HomeScreen() {
  const [image, setImage] = useState<string|null>(null);

  const pickImageAndUpload = async () => {
    const options: ImageLibraryOptions = { quality: 0.5, mediaType: 'photo' };
    launchImageLibrary(options, handleImageSelection);
};

  const handleImageSelection = async (fileobj: ImagePickerResponse) => {
    if (fileobj.assets && fileobj.assets.length > 0) {
      const uri: string = fileobj.assets[0].uri ?? '';
      const uploadTask = storage().ref().child(`/userprofile/${Date.now()}`).putFile(uri);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress === 100)
            Alert.alert('Image uploaded');
        },
        (error) => {
          Alert.alert("Error uploading image");
        },
        async () => {
          try {
            const downloadURL = await uploadTask.snapshot?.ref.getDownloadURL();
            if (downloadURL) {
              setImage(downloadURL);
            }
          } catch (error) {
            console.error("Error getting download URL", error);
          }
        }
      );
    } else {
      Alert.alert('Image not selected');
    }
  };

  return (
    <View>
      <Button title='slectimg' onPress={pickImageAndUpload} />
    </View>
  );
}
