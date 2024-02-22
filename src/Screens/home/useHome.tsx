import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hook/hook';
import {fetchPost} from '../../store/slices/homeSlice/homeSlice';

export function useHome() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const dispatch = useAppDispatch();
  const allPosts = useAppSelector(state => state.allPosts);

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

const formatDate = (timestamp: any) => {
  const date = timestamp.toDate();
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
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  return `${month} ${day}`;
};
