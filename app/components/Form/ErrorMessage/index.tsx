import React, { FC } from "react";
import AppText from "../../AppText";
import { styles } from "./styles";

interface props {
  error?: string;
  visible?: boolean;
}

const ErrorMessage: FC<props> = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <AppText style={styles.text}>{error}</AppText>;
};

export default ErrorMessage;
