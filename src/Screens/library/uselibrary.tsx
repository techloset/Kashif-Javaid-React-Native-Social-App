import React, {useState} from 'react';
import {ParamsList, Post} from '../../../type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useProfile} from '../profile/useProfile';

export function useLibrary(
  props: NativeStackScreenProps<ParamsList, 'Library'>,
) {
  const {data} = useProfile();
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(
    null,
  );
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  const handlePostPress = (index: number) => {
    setSelectedPostIndex(index);
  };

  const handleCancel = () => {
    setSelectedPostIndex(null);
  };

  const handleNext = () => {
    if (
      selectedPostIndex !== null &&
      selectedPostIndex < (data as Post[]).length - 1
    ) {
      setSelectedPostIndex(selectedPostIndex + 1);
    }
  };

  return {
    isVideoPlaying,
    setIsVideoPlaying,
    selectedPostIndex,
    setSelectedPostIndex,
    handlePostPress,
    handleCancel,
    handleNext,
    data,
  };
}
