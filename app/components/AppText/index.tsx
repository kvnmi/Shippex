import { FC } from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { styles } from "./styles";

type textProps = {
  style?: StyleProp<TextStyle>;
};

const AppText: FC<textProps & TextProps> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text
      maxFontSizeMultiplier={1.13}
      style={[styles.text, style]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
