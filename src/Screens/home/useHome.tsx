import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hook/hook';
import {fetchPost} from '../../store/slices/homeSlice/homeSlice';

export function useHome() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector(state => state.allPosts);
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
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  return {
    allPosts,
    isVideoPlaying,
    fetchPost,
    setIsVideoPlaying,
    formatDate,
  };
}
