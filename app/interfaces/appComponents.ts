import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface AppInput {
  label?: string;
  viewStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
}

export interface AppButtonProps {
  title: string;
  onPress?: (data?: any) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  activityIndicatorColor?: string;
}
