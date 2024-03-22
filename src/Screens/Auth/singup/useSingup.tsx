import {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from '../../../../type';
import {useAppDispatch, useAppSelector} from '../../../store/hook/hook';
import {SignUp} from '../../../store/slices/authslice/sigupslice';
import {GoogleSignIn} from '../../../store/slices/authslice/googleslice';
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
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.user);
  const signup = () => {
    const validationError = validate(username, email, password, confirmpass);
    if (validationError) {
      setBadusername(username === '' ? 'Please enter a username' : '');
      setBademail(email === '' ? 'Email is invalid' : '');
      setBadpassword(password === '' ? 'Please enter a password' : '');
      setBadconfirmpass(
        confirmpass === '' ? 'Please confirm your password' : '',
      );
      return;
    }
    try {
      dispatch(SignUp({username, email, password, confirmpass}));
    } catch (error) {}
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
      return 'Email is invalid';
    }
    if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      return 'Email is invalid';
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
    } catch (error) {}
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
    Googlesignup,
    auth,
    isLoading,
    setIsLoading,
  };
};

export default useSingup;
