import { StyleSheet, TextStyle } from "react-native";
import colors from "../../../config/colors";
import { fontPixel, normalise } from "../../../config/normalize";

type Style = {
  text: TextStyle;
};

export const styles = StyleSheet.create<Style>({
  text: {
    color: "red",
    fontSize: fontPixel(12),
    marginLeft: fontPixel(10),
    fontWeight: "400",
    lineHeight: fontPixel(16),
    marginTop: normalise(5),
  },
});
