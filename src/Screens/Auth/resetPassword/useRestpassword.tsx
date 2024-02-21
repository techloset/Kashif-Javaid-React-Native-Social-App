import {Alert} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {firebase} from '@react-native-firebase/auth';
import {ParamsList} from '../../../../type';
import {useAppDispatch, useAppSelector} from '../../../store/hook/hook';
import {ResetPassword} from '../../../store/slices/resetpasswordSlice/resetpasswordSlice';

type Params = NativeStackScreenProps<ParamsList, 'Reset'>;

export function useRestpassword(props: Params) {
  const [email, setEmail] = useState('');
  const [bademail, setBademail] = useState('');

  const dispatch = useAppDispatch();
  const resetpassword = useAppSelector(state => state.resetpassword.email);
  const changepassword = async () => {
    let isValid = true;
    if (email === '') {
      setBademail('Please enter your email');
      isValid = false;
    } else if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setBademail('Please enter a valid email');
      isValid = false;
    }

    if (isValid) {
      try {
        await dispatch(ResetPassword({email}));
      } catch (error) {
        console.log('Error', error);
        Alert.alert('Error', 'Failed to reset password');
      }
    }
  };

  return {
    changepassword,
    email,
    setEmail,
    bademail,
    setBademail,
  };
}
