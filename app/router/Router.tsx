import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./NavigationTheme";
import RootTabNavigator from "./AppNavigator";
import React from "react";
import AuthNavigator from "./AuthNavigator";

export default function Router() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      {<AuthNavigator />}
    </NavigationContainer>
  );
}
