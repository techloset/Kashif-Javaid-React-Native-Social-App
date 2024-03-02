import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../type';
import {useAppDispatch, useAppSelector} from '../../store/hook/hook';
import {userprofile} from '../../store/slices/profilesSlice/profileSlice';
export function useProfile(
  props: NativeStackScreenProps<ParamsList, 'Profile'>,
) {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(state => state.profile);
  useEffect(() => {
    dispatch(userprofile());
  }, [dispatch]);

  const siguout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return {profile, siguout};
}
