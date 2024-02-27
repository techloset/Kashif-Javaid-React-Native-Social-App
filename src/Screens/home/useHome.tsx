import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hook/hook';
import {fetchPost} from '../../store/slices/homeSlice/homeSlice';
import 'firebase/firestore';
import {db} from '../../config/Firebase';
export function useHome() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector(state => state.allPosts);
  const formatDate = (timestamp: db.firestore.Timestamp) => {
    // Convert Firestore Timestamp to JavaScript Date object
    const dateObject = timestamp.toDate();

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
    const month = monthNames[dateObject.getMonth()];
    const day = dateObject.getDate();
    return `${month} ${day}`;
  };
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(fetchPost());
    }, 30000);
    return () => clearInterval(intervalId);
  }, [dispatch]);
  return {
    allPosts,
    isVideoPlaying,
    fetchPost,
    setIsVideoPlaying,
    formatDate,
  };
}
