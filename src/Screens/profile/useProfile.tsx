import {useState, useEffect} from 'react';
import {db} from '../../config/Firebase';
import auth from '@react-native-firebase/auth';

export function useProfile() {
  const [data, setData] = useState<any>([]);

  const fetchUsers = async () => {
    try {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        return;
      }

      const userId = currentUser.uid;
      const response = await db
        .collection('Images')
        .where('userId', '==', userId)
        .get();
      const userData = response.docs.map(doc => doc.data());
      setData(userData);
    } catch (error) {
      console.error('Error fetching user images:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    data,
  };
}
