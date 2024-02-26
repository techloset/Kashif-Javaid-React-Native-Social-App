import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {db} from '../../config/Firebase';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import {useAppDispatch, useAppSelector} from '../../store/hook/hook';
import {updateUserImage} from '../../store/slices/profileImageSlice/profileImageSlice';
import {userupdateprofile} from '../../store/slices/editprofileSlice/editprofileSlice';

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
  const updateprofile = useAppSelector(state => state.updateprofile);
  const imageUrl = useAppSelector(state => state.updateImage.imageUrl);
  const user = auth().currentUser;

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        const userRef = db.collection('Users').doc(user.uid);
        const snapshot = await userRef.get();
        if (snapshot.exists) {
          const userData = snapshot.data();
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

  useEffect(() => {
    setImage(imageUrl);
  }, [imageUrl]);

  const profileimage = () => {
    const options: ImageLibraryOptions = {quality: 0.5, mediaType: 'mixed'};
    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        const selectedAssets = response.assets;
        const uri: string = selectedAssets[0].uri ?? '';
        dispatch(updateUserImage({imageUri: uri}));
        setImage(uri);
      } else {
        Alert.alert('No image selected');
      }
    });
  };

  const updatehandle = () => {
    dispatch(
      userupdateprofile({
        name,
        username,
        website,
        bio,
        email,
        phone,
        gender,
      }),
    );
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
    profileimage,
    image,
    updatehandle,
  };
}
