import colors from "@/config/colors";
import { DefaultTheme } from "@react-navigation/native";

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: "white",
  },
};

export default NavigationTheme;
