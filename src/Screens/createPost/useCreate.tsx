import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  launchImageLibrary,
  ImagePickerResponse,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import {db} from '../../config/Firebase';

export function useCreate() {
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<
    ImagePickerResponse['assets'] | null
  >(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const pickImage = async () => {
    const options: ImageLibraryOptions = {quality: 0.5, mediaType: 'mixed'};
    launchImageLibrary(options, handleImageSelection);
  };

  const handleImageSelection = (fileobj: ImagePickerResponse) => {
    if (fileobj.assets && fileobj.assets.length > 0) {
      const selectedAssets = fileobj.assets;
      const uri: string = selectedAssets[0].uri ?? '';
      setImageUri(uri);
      setSelectedAsset(selectedAssets);
    } else {
      Alert.alert('No image selected');
    }
  };

  const uploadImageAndDescription = async () => {
    if (!imageUri || !selectedAsset) {
      Alert.alert('Please select All files');
      return;
    }
    setUploading(true);
    try {
      const uploadTask = storage()
        .ref()
        .child(`/userprofile/${Date.now()}`)
        .putFile(imageUri);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setTransferred(progress);
        },
        error => {
          Alert.alert('Error uploading image');
          setUploading(false);
        },
        async () => {
          try {
            const downloadURL = await uploadTask.snapshot?.ref.getDownloadURL();
            if (downloadURL) {
              const user = auth().currentUser;
              if (user) {
                const userId = user.uid;
                const userName = user.displayName || '';
                const mediaType =
                  selectedAsset &&
                  selectedAsset.length > 0 &&
                  selectedAsset[0].type &&
                  selectedAsset[0].type.startsWith('video')
                    ? 'video'
                    : 'image';

                await db.collection('Images').add({
                  downloadURL,
                  userName,
                  userId,
                  createdAt: new Date(),
                  mediaType,
                  description,
                });

                Alert.alert('Image uploaded successfully');
                setImageUri(null);
                setSelectedAsset(null);
                setDescription('');
              }
            }
          } catch (error) {
            console.error('Error getting download URL', error);
          }
          setUploading(false);
        },
      );
    } catch (error) {
      console.error('Error uploading image', error);
      setUploading(false);
    }
  };

  useEffect(() => {
    console.log(description);
  }, []);

  return {
    description,
    setDescription,
    pickImage,
    uploadImageAndDescription,
    imageUri,
    uploading,
    transferred,
  };
}
