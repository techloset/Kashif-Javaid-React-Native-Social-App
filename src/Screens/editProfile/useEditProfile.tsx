import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {db} from '../../config/Firebase';
import {Alert} from 'react-native';
import {
  launchImageLibrary,
  ImagePickerResponse,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

export function useEditProfile() {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [website, setWebsite] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const user = auth().currentUser;

  const profile = async () => {
    const options: ImageLibraryOptions = {quality: 0.5, mediaType: 'mixed'};
    launchImageLibrary(options, profileimage);
  };

  const profileimage = async (fileobj: ImagePickerResponse) => {
    if (fileobj.assets && fileobj.assets.length > 0) {
      const selectedAsset = fileobj.assets[0];
      const uri: string = selectedAsset.uri ?? '';
      const uploadTask = storage()
        .ref()
        .child(`/profileimage/${Date.now()}`)
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
                db.collection('Profile').add({
                  downloadURL,
                  userId,
                  createdAt: new Date(),
                });
              }
            }

            console.log(profileimage);
          } catch (error) {
            console.error('Error getting download URL', error);
          }
        },
      );
    } else {
      Alert.alert('Not selected');
    }
  };

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

  const validate = () => {
    let isValid = true;
    if (phone.length < 11) {
      setPhone('Please enter a valid phone number');
      isValid = false;
    } else if (phone.length >= 11) {
      isValid = true;
    }
    return isValid;
  };

  const handleEditProfile = async () => {
    if (validate()) {
      if (user) {
        const userRef = db.collection('Users').doc(user.uid);
        await userRef
          .set(
            {
              name,
              username,
              website,
              bio,
              email,
              phone,
              gender,
            },
            {merge: true},
          )
          .then(() => {
            Alert.alert('Profile updated!');
          })
          .catch(error => {
            Alert.alert('Error updating profile: ', error.message);
          });
      }
    }
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
    handleEditProfile,
    profile,
    profileimage,
    image,
  };
}
