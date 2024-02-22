import {KeyboardTypeOptions} from 'react-native';

export type ParamsList = {
  Login: undefined;
  Singup: undefined;
  Reset: undefined;
  HomeScreen: undefined;
  Root: undefined;
  Create: undefined;
  Profile: undefined;
  useAddScreen: undefined;
  user: undefined;
  Library: undefined;
  Editprofile: undefined;
  Photo: undefined;
  Video: undefined;
  EditNavigation: undefined;
};
export type RootStackParamList = {
  Login: undefined;
};

export type params = {
  image: string;
  photoUrl: string;
};

export type date = {
  id: string;
  imageUrl: string;
};

export type Post = {
  id: string;
  downloadURL: string;
  userName: string;
  userId: string;
  createdAt: Date;
  mediaType: 'image' | 'video';
};

export type InputType = {
  secureTextEnter?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  value?: string;
  label?: string;
};

export type EditInput = {
  secureTextEnter?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  value?: string;
  label?: string;
};

type user = {
  id: string;
  user: string;
  email: string;
  phone: string;
  bio: string;
  photoUrl: string;
};

export interface AuthState {
  user: null;
  isLoading: boolean;
  error: string | null;
  badUsername: string;
  badEmail: string;
  badPassword: string;
  badConfirmPass: string;
  setuseName: string;
  setuseEmail: string;
  setusePassword: string;
  setuseConfirmPass: string;
}

export interface Googletype {
  user: null;
  isLoading: boolean;
  error: string | null;
  username: string;
  email: string;
  password: string;
}

export interface LoginState {
  user: null;
  isLoading: boolean;
  error: string | null;
  email: string;
  password: string;
}

export interface resetpasswordState {
  user: null;
  error: string | null;
  email: string;
  isLoading: boolean;
}

export interface PostState {
  user: null;
  error: string | null;
  isLoading: boolean;
  description: string;
  imageUri: string;
  selectedAsset: string;
}

export interface UploadResult {
  success: boolean;
}

export interface HomeState {
  user: null;
  error: string | null;
  isLoading: boolean;
  data: any[];
  setData: any[];
  isVideoPlaying: boolean;
}

export interface profileState {
  user: null;
  error: string | null;
  isLoading: boolean;
  data: any[];
  setData: any[];
}
