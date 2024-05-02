import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import {useAppDispatch, useAppSelector} from '../../store/hook/hook';
import {users} from '../../constants/instance';
import {
  updateUserImage,
  userupdateprofile,
} from '../../store/slices/profileslice/profileSlice';
export function useEditProfile() {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [website, setWebsite] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState<string | null>('');
  const dispatch = useAppDispatch();
  const updateprofile = useAppSelector(state => state.profile);

  const user = auth().currentUser;
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        const userRef = users.doc(user.uid);
        const snapshot = await userRef.get();
        if (snapshot.exists) {
          const userData = snapshot.data();
          setName(userData?.image || '');
          setName(userData?.name || '');
          setUserName(userData?.username || '');
          setWebsite(userData?.website || '');
          setBio(userData?.bio || '');
          setEmail(userData?.email || '');
          setPhone(userData?.phone || '');
          setGender(userData?.gender || '');
        }
      }
    };

    fetchUserProfile();
  }, [user]);

  const imageUrl = useAppSelector(state => state.profile.imageUrl);
  const userId = useAppSelector(state => state.profile.userId);
  const profileImage = () => {
    const options: ImageLibraryOptions = {quality: 0.5, mediaType: 'mixed'};
    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        const selectedAssets = response.assets;
        const uri: string = selectedAssets[0].uri ?? '';
        dispatch(updateUserImage({imageUri: uri, userId: userId}));
        setImage(imageUrl);
      } else {
        Alert.alert('No image selected');
      }
    });
  };

  useEffect(() => {
    setImage(imageUrl);
  }, [dispatch, imageUrl]);

  let userData = {
    name,
    username,
    website,
    bio,
    email,
    phone,
    gender,
  };
  const updatehandle = () => {
    dispatch(userupdateprofile(userData));
  };

  return {
    name,
    setName,
    username,
    setUserName,
    website,
    setWebsite,
    bio,
    setBio,
    email,
    setEmail,
    phone,
    setPhone,
    gender,
    setGender,
    user,
    updateprofile,
    profileImage,
    image,
    updatehandle,
    imageUrl,
  };
}
