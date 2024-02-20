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
