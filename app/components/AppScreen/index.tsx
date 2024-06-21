import { ScrollView, ViewStyle } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { StatusBar } from "expo-status-bar";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  scrollable?: boolean;
  statusBarColor?: string;
};

const Index = ({ children, style, scrollable }: Props) => {
  return (
    <SafeAreaView edges={["top"]} style={[styles.container, style]}>
      {scrollable ? (
        <ScrollView
          bounces={false}
          style={styles.container}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
      <StatusBar style="dark" backgroundColor="white" />
    </SafeAreaView>
  );
};

export default Index;
