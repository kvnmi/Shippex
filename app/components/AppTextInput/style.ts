import colors from "@/config/colors";
import {
  fontPixel,
  normalise,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from "@/config/normalize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputCtn: {
    borderRadius: 10,
    borderWidth: normalise(1),
    borderColor: colors.gray5,
    overflow: "hidden",
    paddingHorizontal: pixelSizeHorizontal(14),
    paddingVertical: pixelSizeVertical(8.5),
  },
  textInput: {
    color: colors.primary,
    fontSize: fontPixel(16),
    textAlignVertical: "top",
    flexGrow: 1,
    height: "100%",
  },
  container: {
    rowGap: pixelSizeVertical(3),
  },
  leftLabel: {
    color: "#58536E",
    fontWeight: "400",
    fontSize: fontPixel(11),
    lineHeight: normalise(13),
    marginBottom: pixelSizeVertical(4),
  },
  fieldCtn: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 7,
  },
});
