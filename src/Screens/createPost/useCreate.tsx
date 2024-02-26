import {Alert} from 'react-native';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useAppDispatch, useAppSelector} from '../../store/hook/hook';
import {useState} from 'react';
import {uploadImageAndDescription} from '../../store/slices/createSlice/createSlice';

export function useCreate() {
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<
    ImagePickerResponse['assets'] | null
  >(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const dispatch = useAppDispatch();
  const addpost = useAppSelector(state => state.addpost.user);

  const handleImageSelect = () => {
    const options: ImageLibraryOptions = {quality: 0.5, mediaType: 'mixed'};
    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        const selectedAssets = response.assets;
        const uri: string = selectedAssets[0].uri ?? '';
        setImageUri(uri);
        setSelectedAsset(selectedAssets);
      } else {
        Alert.alert('No image selected');
      }
    });
  };
  console.log('pick image', handleImageSelect);
  const handleUpload = () => {
    if (!imageUri || !selectedAsset || !description) {
      Alert.alert('Please select an image and enter description');
      return;
    }
    dispatch(uploadImageAndDescription({imageUri, description, selectedAsset}));
    setImageUri('');
    setDescription('');
    setSelectedAsset(null);
  };
  console.log('click', handleUpload);
  return {
    description,
    setDescription,
    handleImageSelect,
    handleUpload,
    imageUri,
    addpost,
    uploading,
    transferred,
    setUploading,
    setTransferred,
  };
}
