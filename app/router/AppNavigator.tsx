import AppText from "@/components/AppText";
import colors from "@/config/colors";
import {
  fontPixel,
  heightPixel,
  normalise,
  widthPixel,
} from "@/config/normalize";
import Home from "@/screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ViewStyle,
  Platform,
  Pressable,
  Image,
  ImageSourcePropType,
  View,
} from "react-native";
import { AppTabParamList } from "./navigationTypes";
import LandingPage from "@/screens/LandingPage";

const Tab = createBottomTabNavigator<AppTabParamList>();

const RootTabNavigator = () => {
  const styles: ViewStyle = {
    height: normalise(70),
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarInactiveTintColor: "#A7A3B3",
        tabBarActiveTintColor: colors.primary,
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarStyle: styles,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBar
              active={focused}
              img={require("../../assets/images/nav/shipments.png")}
              tab="Shipments"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBar
              active={focused}
              img={require("../../assets/images/nav/scan.png")}
              tab="Scan"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBar
              active={focused}
              img={require("../../assets/images/nav/wallet.png")}
              tab="Wallet"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBar
              active={focused}
              img={require("../../assets/images/nav/profile.png")}
              tab="Profile"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function TabBar({
  img,
  tab,
  active,
}: {
  img: ImageSourcePropType;
  tab: string;
  active: boolean;
}) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={img}
        style={{
          height: heightPixel(25),
          width: widthPixel(31),
          marginBottom: normalise(6),
        }}
        resizeMode="contain"
      />
      <AppText
        style={[
          {
            fontSize: fontPixel(11),
            lineHeight: normalise(13),
            letterSpacing: 0.07,
            color: active ? "#5B4CCC" : "#A7A3B3",
          },
        ]}
      >
        {tab}
      </AppText>
    </View>
  );
}

const EmptyScreen = () => <View></View>;

export default RootTabNavigator;
