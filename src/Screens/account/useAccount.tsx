import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../type';
import {useAppDispatch, useAppSelector} from '../../store/hook/hook';
import {Alert} from 'react-native';
import {userprofile} from '../../store/slices/profileslice/profileSlice';
export function useProfile(
  props: NativeStackScreenProps<ParamsList, 'Profile'>,
) {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(state => state.profile);
  useEffect(() => {
    dispatch(userprofile());
  }, [dispatch, profile]);

  const siguout = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('Logout successful. Thank you for visiting!'));
  };
  return {profile, siguout};
}
