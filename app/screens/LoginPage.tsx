import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  fontPixel,
  normalise,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from "@/config/normalize";
import AppScreen from "@/components/AppScreen";
import AppText from "@/components/AppText";
import Form from "@/components/Form";
import AppField, { UrlFIeld } from "@/components/Form/AppField";
import SubmitButton from "@/components/Form/SubmitButton";
import { object, string } from "yup";

interface props {
  closeModal: () => void;
  onLogin: () => void;
}

function LoginPage({ closeModal, onLogin }: props) {
  const validationSchema = object().shape({
    url: string().required("Uri is a required field").label("Url"),
    login: string().required("This field is required").label("Login"),
    password: string().required("Password is a required field"),
  });

  function login({ usernam, password }: { usernam: string; password: string }) {
    const formData = new FormData();

    formData.append("usr", usernam);
    formData.append("pwd", password);
  }
  return (
    <AppScreen scrollable>
      <View style={styles.container}>
        <Pressable style={styles.iconCtn} onPress={closeModal}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={"#4561DB"}
            size={20}
            style={{ margin: 0, padding: 0 }}
          />
          <AppText style={styles.cancel}>Cancel</AppText>
        </Pressable>
        <AppText style={styles.login}>Login</AppText>
        <AppText style={styles.tagline}>
          Please enter your First, Last name and your phone number in order to
          register
        </AppText>

        <View style={{ flex: 1 }}>
          <Form
            initialValues={{ url: "", login: "", password: "" }}
            onSubmit={onLogin}
            //validationSchema={validationSchema}
          >
            <View style={styles.formCtn}>
              <UrlFIeld
                fieldName={"url"}
                placeholder="URL"
                label="URL"
                keyboardType="url"
              />
              <AppField
                fieldName={"login"}
                placeholder="Username /  Email"
                label="Username /  Email"
                keyboardType="email-address"
                autoComplete="email"
              />
              <AppField
                fieldName={"password"}
                placeholder="Password"
                label="Password"
                secureTextEntry
              />
            </View>

            <SubmitButton title="Login" />
          </Form>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingTop: pixelSizeVertical(11),
    paddingBottom: pixelSizeVertical(32),
  },
  iconCtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  cancel: {
    color: "#007AFF",
    fontSize: fontPixel(17),
    lineHeight: pixelSizeVertical(22),
    letterSpacing: -0.4,
  },
  login: {
    fontWeight: "600",
    fontSize: fontPixel(34),
    lineHeight: normalise(41),
    marginVertical: pixelSizeVertical(11),
  },
  tagline: {
    color: "#757281",
    fontSize: fontPixel(17),
    lineHeight: normalise(24),
    letterSpacing: -0.41,
    marginBottom: 38,
  },
  formCtn: {
    rowGap: pixelSizeVertical(31),
    flexGrow: 1,
  },
});

export default LoginPage;
