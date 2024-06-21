import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/config/colors";
import { normalise } from "@/config/normalize";

interface props {
  isChecked: boolean;
  onPress?: () => void;
}
export default function Checkbox({ isChecked, onPress }: props) {
  return (
    <Pressable
      style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}
      onPress={onPress}
    >
      {isChecked && (
        <Ionicons name="checkmark" size={15} color={colors.primary} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: normalise(20),
    height: normalise(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1.22,
    borderColor: "#D0D5DD",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "white",
  },
});
