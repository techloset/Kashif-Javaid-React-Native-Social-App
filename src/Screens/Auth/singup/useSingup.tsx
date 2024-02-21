import {Alert} from 'react-native';
import {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../../type';
import {useAppDispatch, useAppSelector} from '../../../store/hook/hook';
import {SignUp} from '../../../store/slices/sigupslice/sigupslice';
import {GoogleSignIn} from '../../../store/slices/googleSlice/googleSlice';

type Params = NativeStackScreenProps<ParamsList, 'Singup'>;

const useSingup = (props: NativeStackScreenProps<ParamsList, 'Singup'>) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [badusername, setBadusername] = useState('');
  const [bademail, setBademail] = useState('');
  const [badpassword, setBadpassword] = useState('');
  const [badconfirmpass, setBadconfirmpass] = useState('');

  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.user);
  const signup = () => {
    const validationError = validate(username, email, password, confirmpass);
    if (validationError) {
      setBadusername(username === '' ? 'Please enter a username' : '');
      setBademail(email === '' ? 'Please enter a valid email' : '');
      setBadpassword(password === '' ? 'Please enter a password' : '');
      setBadconfirmpass(
        confirmpass === '' ? 'Please confirm your password' : '',
      );
      return;
    }
    try {
      dispatch(SignUp({username, email, password, confirmpass}));
    } catch (error) {
      console.log('error', error);
    }
  };
  const validate = (
    username: string,
    email: string,
    password: string,
    confirmpass: string,
  ): string | undefined => {
    if (username === '') {
      return 'Please enter a username';
    }
    if (email === '') {
      return 'Please enter a valid email';
    }
    if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      return 'Please enter a valid email';
    }
    if (password === '') {
      return 'Please enter a password';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    if (confirmpass === '') {
      return 'Please confirm your password';
    }
    if (confirmpass !== password) {
      return 'Passwords do not match';
    }
  };

  const Googlesignup = useAppSelector(state => state.Googlesignup.user);
  const Googlesign = () => {
    try {
      dispatch(GoogleSignIn());
    } catch (error) {
      console.log('error', error);
    }
  };

  return {
    signup,
    username,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    confirmpass,
    setConfirmpass,
    setBadusername,
    setBademail,
    setBadpassword,
    setBadconfirmpass,
    badusername,
    bademail,
    badpassword,
    badconfirmpass,
    Googlesign,
  };
};

export default useSingup;
