import AppButton from "@/components/AppButton";
import colors from "@/config/colors";
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from "@/config/normalize";
import LoginModal from "@/modals/LoginModal";
import { AllStackScreenProps } from "@/router/navigationTypes";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

function LandingPage({ navigation }: AllStackScreenProps<"LandingPage">) {
  const [loginModal, showLoginModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          source={require("../../assets/images/logo-full.png")}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <AppButton
        title="Login"
        style={styles.loginBtn}
        textStyle={styles.btnTxt}
        onPress={() => showLoginModal(true)}
      />
      <ExpoStatusBar style="light" />

      {loginModal && (
        <LoginModal
          active={loginModal}
          closeModal={() => showLoginModal(false)}
          onLogin={() =>
            navigation.navigate("App", {
              screen: "Home",
            })
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: pixelSizeHorizontal(24),
    paddingBottom: pixelSizeVertical(32),
  },
  loginBtn: {
    backgroundColor: colors.white,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    color: colors.primary,
    fontWeight: "700",
  },
  img: {
    width: widthPixel(207.63),
    height: heightPixel(36),
  },
});

export default LandingPage;
