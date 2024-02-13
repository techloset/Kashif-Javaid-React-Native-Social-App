import {useEffect, useState} from 'react';
import {db} from '../../config/Firebase';
export function useHome() {
  const [data, setData] = useState<any>();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      console.log('Added something!');
    } else {
      setIsLiked(false);
      console.log('Removed something!');
    }
  };
  const fetchUsers = async () => {
    try {
      const responce = await db.collection('Images').get();

      const fetchData = responce.docs.map(doc => doc.data());
      setData(fetchData);
      console.log(fetchData);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    data,
    handleLike,
    isLiked,
    setIsLiked,
  };
}
