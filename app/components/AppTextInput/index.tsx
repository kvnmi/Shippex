import React from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";

import { styles } from "./style";
import { AppInput } from "@/interfaces/appComponents";
import colors from "@/config/colors";
import AppText from "../AppText";
import { FontAwesome6 } from "@expo/vector-icons";
import { normalise } from "@/config/normalize";
export type IAppTextInput = AppInput &
  TextInputProps & {
    iconName?: keyof typeof FontAwesome6.glyphMap;
    iconSize?: number;
    iconColor?: string;
    PlaceHolderIcon?: React.JSX.Element;
    labelStyle?: StyleProp<TextStyle>;
  };

function Index({
  label,
  viewStyle,
  textInputStyle,
  iconName = "magnifying-glass",
  iconColor = colors.gray5,
  iconSize = normalise(20),
  PlaceHolderIcon,
  labelStyle,
  ...otherProps
}: IAppTextInput) {
  return (
    <View>
      <View style={[styles.inputCtn, viewStyle]}>
        {label && (
          <AppText style={[styles.leftLabel, labelStyle]}>{label}</AppText>
        )}
        <View style={styles.fieldCtn}>
          {PlaceHolderIcon && <View>{PlaceHolderIcon}</View>}
          {true}
          <TextInput
            style={[styles.textInput, textInputStyle]}
            cursorColor={"#0F172A"}
            placeholderTextColor={"#B5B5B3"}
            {...otherProps}
          />
        </View>
      </View>
    </View>
  );
}

export default Index;
