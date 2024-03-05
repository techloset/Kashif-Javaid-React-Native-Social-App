import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hook/hook';
import {fetchPost} from '../../store/slices/homeSlice/homeSlice';
import {db} from '../../config/Firebase';
import {PostData} from '../../../type';

export function useHome() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const formatDate = (timestamp: Date) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = monthNames[timestamp.getMonth()];
    const day = timestamp.getDate();
    return `${month} ${day}`;
  };
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector(state => state.allPosts.data);

  useEffect(() => {
    const unsubscribe = db.collection('Images').onSnapshot(async snapshot => {
      const posts: PostData[] = [];
      snapshot.forEach(async doc => {
        const imageData = doc.data();
        const postId = doc.id;
        const userId = imageData.userId;
        const profileQuerySnapshot = await db
          .collection('profile')
          .where('userId', '==', userId)
          .get();
        const profileDoc = profileQuerySnapshot.docs[0];
        const profileData = profileDoc.data();
        const profileImage = profileData.downloadURL;
        const postData = {
          postId: postId,
          userId: '',
          downloadURL: imageData.downloadURL,
          profileImageUrl: profileImage,
          mediaType: 'image',
          profileImage: '',
          createdAt: null,
          userName: imageData.userName,
          description: imageData.description,
        };
        posts.push(postData);
      });
      dispatch(fetchPost());
    });

    return () => unsubscribe();
  }, [dispatch]);

  return {
    allPosts,
    isVideoPlaying,
    setIsVideoPlaying,
    formatDate,
  };
}
