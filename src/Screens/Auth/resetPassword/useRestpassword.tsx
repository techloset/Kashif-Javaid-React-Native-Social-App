import {Alert} from 'react-native';
import {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../../type';
import {useAppDispatch, useAppSelector} from '../../../store/hook/hook';
import {ResetPassword} from '../../../store/slices/authslice/resetpasswordslice';
type Params = NativeStackScreenProps<ParamsList, 'Reset'>;
export function useRestpassword(props: Params) {
  const [email, setEmail] = useState('');
  const [bademail, setBademail] = useState('');
  const dispatch = useAppDispatch();
  const resetpassword = useAppSelector(state => state.resetpassword.email);
  const changepassword = async () => {
    let isValid = true;
    if (email === '') {
      setBademail('Email is invalid');
      isValid = false;
    } else if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setBademail('Email is invalid');
      isValid = false;
    }

    if (isValid) {
      try {
        await dispatch(ResetPassword({email}));
      } catch (error) {
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
    resetpassword,
  };
}
