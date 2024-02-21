import {useState, useEffect} from 'react';
import {db} from '../../config/Firebase';
import auth from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../type';

export function useProfile(
  props: NativeStackScreenProps<ParamsList, 'Profile'>,
) {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const currentUser = auth().currentUser;
        if (!currentUser) {
          return;
        }
        const userId = currentUser.uid;
        console.log(userId);
        const response = await db
          .collection('Images')
          .where('userId', '==', userId)
          .get();
        const userData = response.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log(userData);

        setData(userData);
      } catch (error) {
        console.error('Error fetching user images:', error);
      }
    };
    fetchImages();
  }, []);

  const siguout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return {data, siguout};
}
