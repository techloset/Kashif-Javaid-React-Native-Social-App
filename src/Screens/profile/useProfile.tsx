import {useState, useEffect} from 'react';
import {db} from '../../config/Firebase';
import auth from '@react-native-firebase/auth';

export function useProfile() {
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

  return {data};
}
