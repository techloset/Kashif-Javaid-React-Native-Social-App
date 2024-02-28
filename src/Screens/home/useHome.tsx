import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hook/hook';
import {fetchPost} from '../../store/slices/homeSlice/homeSlice';

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
  const allPosts = useAppSelector(state => state.allPosts);
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return {
    allPosts,
    isVideoPlaying,
    fetchPost,
    setIsVideoPlaying,
    formatDate,
  };
}
