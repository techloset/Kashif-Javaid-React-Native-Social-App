import {KeyboardTypeOptions, TouchableOpacityProps} from 'react-native';

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
  Editprofile: undefined;
  EditNavigation: undefined;
  OtherProfile: {event: ImageData};

  AuthScreens: undefined;
};
export type RootStackParamList = {
  Login: undefined;
};

export type tabnavigation = {
  HOME: string;
  CREATE: string;
  PROFILE: string;
};

export type date = {
  id: string;
  imageUrl: string;
};
export interface user {
  id: string;
  name: string;
  user: null;
  userId: string;
}

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
  secureTextEntry: boolean;
};

export type EditInput = {
  secureTextEnter?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  value?: string;
  label?: string;
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
  userId: string;
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
  error: string | null;
  isLoading: boolean;
  description: string;
  imageUri: string;
  selectedAsset: string;
}

export interface UploadResult {
  success: boolean;
}
export interface Item {
  createdAt: Date;
}

export interface UploadResult1 {
  success: boolean;
  imageUrl: string;
  userId: string;
}

export interface HomeState {
  error: string | null;
  isLoading: boolean;
  data: any[];
  setData: any[];
  isVideoPlaying: boolean;
}

export interface PostData {
  postId: string;
  userId: string;
  profileImage: string;
  profileImageUrl: string;
  createdAt: number | null;
  mediaType: string;
  userName: string;
  description: string;
  downloadURL: string;
}

export interface EditprofileState {
  user: null;
  isLoading: boolean;
  error: string | null;
  name: string;
  username: string;
  website: string;
  bio: string;
  email: string;
  phone: string;
  gender: string;
  data: {};
}
export interface ImageState {
  isLoading: boolean;
  error: string | null;
  imageUrl: string;
  userId: string;
}

export type Params = {
  image: string;
  photoUrl: string;
  profileImageUrl: string;
};
export interface ImageData {
  route: any;
}
export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading: boolean;
  disabled: boolean;
  onPress: () => void;
}
export type TabBarIconProps = {
  focused: boolean;
};

export interface profileState {
  user: null;
  error: string | null;
  isLoading: boolean;
  data: {};
  setData: ProfileTypes[];
  imageUrl: string;
  userId: string;
  name: string;
  username: string;
  website: string;
  bio: string;
  email: string;
  phone: string;
  gender: string;
}

export interface ProfileTypes {
  name: string;
  username: string;
  website: string;
  bio: string;
  email: string;
  phone: string;
  gender: string;
}
