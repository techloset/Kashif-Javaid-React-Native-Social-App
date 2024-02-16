import React, {useState} from 'react';
import {Alert} from 'react-native';
import {
  launchImageLibrary,
  ImagePickerResponse,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList, Post} from '../../../type';
import {db} from '../../config/Firebase';

type Params = NativeStackScreenProps<ParamsList, 'Create'>;

export function useCreate() {
  const [image, setImage] = useState<string | null>(null);
  const [data, setData] = useState<Post[]>([]);
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(
    null,
  );
  const pickImageAndUpload = async () => {
    const options: ImageLibraryOptions = {quality: 0.5, mediaType: 'mixed'};
    launchImageLibrary(options, handleImageSelection);
  };

  const handleImageSelection = async (fileobj: ImagePickerResponse) => {
    if (fileobj.assets && fileobj.assets.length > 0) {
      const selectedAsset = fileobj.assets[0];
      const uri: string = selectedAsset.uri ?? '';
      const uploadTask = storage()
        .ref()
        .child(`/userprofile/${Date.now()}`)
        .putFile(uri);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress === 100) Alert.alert('uploaded');
        },
        error => {
          Alert.alert('Error uploading image');
        },
        async () => {
          try {
            const downloadURL = await uploadTask.snapshot?.ref.getDownloadURL();
            if (downloadURL) {
              setImage(downloadURL);
              console.log(downloadURL);
              const user = auth().currentUser;
              if (user) {
                const userId = user.uid;
                const userName = user.displayName || '';
                const mediaType =
                  selectedAsset.type && selectedAsset.type.startsWith('video')
                    ? 'video'
                    : 'image';
                db.collection('Images').add({
                  downloadURL,
                  userName,
                  userId,
                  createdAt: new Date(),
                  mediaType,
                });
              }
            }
          } catch (error) {
            console.error('Error getting download URL', error);
          }
        },
      );
    } else {
      Alert.alert('Not selected');
    }
  };

  const handlePostPress = (index: number) => {
    setSelectedPostIndex(index);
  };

  const handleCancel = () => {
    setSelectedPostIndex(null);
  };

  const handleNext = () => {
    if (
      selectedPostIndex !== null &&
      selectedPostIndex < (data as Post[]).length - 1
    ) {
      setSelectedPostIndex(selectedPostIndex + 1);
    }
  };

  return {
    pickImageAndUpload,
    handlePostPress,
    handleCancel,
    handleNext,
    selectedPostIndex,
    data,
  };
}
