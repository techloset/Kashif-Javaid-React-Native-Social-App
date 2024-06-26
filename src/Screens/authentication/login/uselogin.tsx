import {useState} from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {ParamsList} from '../../../../type';
import {useAppDispatch, useAppSelector} from '../../../store/hook/hook';
import {
  GoogleSignIn,
  userlogin,
} from '../../../store/slices/authslice/authslice';
type Params = NativeStackScreenProps<ParamsList, 'Login'>;
export function useLogin(props: Params) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [bademail, setBademail] = useState('');
  const [badpassword, setBadpassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const validate = () => {
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
    } else {
      setBademail('');
    }

    if (password === '') {
      setBadpassword('Please enter your Password');
      isValid = false;
    } else if (password.length < 8) {
      setBadpassword('Password must be at least 8 characters');
      isValid = false;
    } else {
      setBadpassword('');
    }

    return isValid;
  };

  const dispatch = useAppDispatch();
  const login = useAppSelector(state => state.auth.user);
  const Loginhandle = () => {
    if (validate()) {
      try {
        dispatch(userlogin({email, password}));
      } catch (error) {}
    }
  };
  const Googlesignup = useAppSelector(state => state.auth.user);

  const Googlesign = () => {
    try {
      dispatch(GoogleSignIn());
    } catch (error) {}
  };

  return {
    password,
    setPassword,
    email,
    setEmail,
    bademail,
    badpassword,
    Loginhandle,
    Googlesign,
    login,
    Googlesignup,
    isLoading,
    setIsLoading,
  };
}
