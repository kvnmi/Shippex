import React, { FC } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import AppText from "../AppText";
import { styles } from "./styles";
import { AppButtonProps } from "@/interfaces/appComponents";

const AppButton: FC<AppButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  loading,
  activityIndicatorColor = "white",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress && !loading ? onPress : () => console.log("Tapped")}
      style={[styles.button, { opacity: disabled ? 0.6 : 1 }, style]}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={activityIndicatorColor} />
      ) : (
        <AppText style={[styles.text, textStyle]}>{title}</AppText>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
