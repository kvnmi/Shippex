import React, { useState } from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";
import colors from "@/config/colors";
import Field, { IAppTextInput } from "../../AppTextInput";
import ErrorMessage from "../ErrorMessage";
import AppText from "@/components/AppText";
import { fontPixel } from "@/config/normalize";

interface props<T> {
  fieldName: keyof T;
  showErrorMessage?: boolean;
}

function Index<T>({
  fieldName,
  showErrorMessage,
  label,
  ...otherProps
}: props<T> & IAppTextInput) {
  const { values, setFieldValue, setFieldTouched, errors, touched } =
    useFormikContext<T>();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <Field
        onBlur={() => setFieldTouched(fieldName.toString())}
        onChangeText={(text) => setFieldValue(fieldName.toString(), text)}
        returnKeyType="done"
        value={values[fieldName] as string}
        viewStyle={{
          borderColor: isFocused ? "#2F50C1" : "grey",
          borderWidth: isFocused ? 1 : 0,
        }}
        onFocus={() => setIsFocused(true)}
        onEndEditing={() => {
          setIsFocused(false);
        }}
        label={isFocused ? label : ""}
        {...otherProps}
      />
      {showErrorMessage && (
        <ErrorMessage
          error={errors[fieldName] as string}
          visible={touched[fieldName] as boolean}
        />
      )}
    </View>
  );
}

export function UrlFIeld<T>({
  fieldName,
  showErrorMessage,
  label,
  ...otherProps
}: props<T> & IAppTextInput) {
  const { values, setFieldValue, setFieldTouched, errors, touched } =
    useFormikContext<T>();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <Field
        onBlur={() => setFieldTouched(fieldName.toString())}
        onChangeText={(text) => setFieldValue(fieldName.toString(), text)}
        returnKeyType="done"
        value={values[fieldName] as string}
        viewStyle={{
          borderColor: isFocused ? "#2F50C1" : "grey",
          borderWidth: isFocused ? 1 : 0,
        }}
        onFocus={() => setIsFocused(true)}
        onEndEditing={() => {
          setIsFocused(false);
        }}
        label={isFocused ? label : ""}
        PlaceHolderIcon={values[fieldName] ? PlaceHolderIcon() : undefined}
        {...otherProps}
      />
      {showErrorMessage && (
        <ErrorMessage
          error={errors[fieldName] as string}
          visible={touched[fieldName] as boolean}
        />
      )}
    </View>
  );
}

const PlaceHolderIcon = () => (
  <AppText
    style={{
      color: "#58536E",
      fontSize: fontPixel(16),
      bottom: 2,
    }}
  >
    https:// |
  </AppText>
);

export default Index;
