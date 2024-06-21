import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "./AppCheckBox";
import AppText from "./AppText";
import colors from "@/config/colors";
import {
  normalise,
  widthPixel,
  heightPixel,
  fontPixel,
} from "@/config/normalize";
import { View, Pressable, Image, StyleSheet } from "react-native";

interface props {
  status: "recieved" | "cancelled";
  active?: boolean;
  setActive: () => void;
}

const HomeCard = ({ status, active = false, setActive }: props) => {
  return (
    <View style={styles.container}>
      <Checkbox isChecked={active} onPress={setActive} />
      <Image
        source={require("../../assets/images/box.png")}
        style={styles.image}
      />

      <View>
        <AppText style={styles.text}>AWB</AppText>
        <AppText style={styles.boldText}>41785691423</AppText>
        <View style={styles.taglineCtn}>
          <AppText style={styles.text}>Cairo</AppText>
          <MaterialCommunityIcons style={styles.icon} name="arrow-right" />
          <AppText style={styles.text}>Alexandria</AppText>
        </View>
      </View>
      <Pressable>
        <AppText
          style={[
            styles.pressableText,
            status == "recieved" && {
              color: colors.primary,
              backgroundColor: "#D9E6FD",
            },
          ]}
        >
          {status}
        </AppText>
      </Pressable>
      <Pressable style={styles.expandButton}>
        <MaterialCommunityIcons style={styles.expandIcon} name="arrow-expand" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: normalise(10),
    backgroundColor: "#F4F2F8",
    borderRadius: normalise(10),
    flexDirection: "row",
    columnGap: normalise(14),
    alignItems: "center",
  },
  image: {
    width: widthPixel(40),
    height: heightPixel(40),
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: normalise(20),
  },
  text: {
    fontSize: fontPixel(13),
    lineHeight: normalise(18),
  },
  boldText: {
    fontSize: fontPixel(18),
    fontWeight: "600",
    lineHeight: normalise(25),
  },
  icon: {
    color: colors.primary,
    fontSize: normalise(15),
  },
  pressableText: {
    fontSize: fontPixel(10),
    fontWeight: "500",
    lineHeight: normalise(15),
    textTransform: "uppercase",
    padding: 4,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 4,
  },
  expandIcon: {
    color: colors.primary,
    fontSize: normalise(18),
  },
  expandButton: {
    backgroundColor: colors.white,
    height: normalise(24),
    width: normalise(24),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
  taglineCtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: normalise(5),
  },
});
export default HomeCard;
