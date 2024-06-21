import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type AppTabParamList = {
  Home: undefined;
  Scan: undefined;
  Wallet: undefined;
  Profile: undefined;
  Login: undefined;
};

type BaseNavConfig<T extends ParamListBase, Screen extends keyof T> = {
  navigation: BottomTabNavigationProp<T, Screen>;
  route: RouteProp<T, Screen>;
};

export type AllStackParamList = {
  LandingPage: undefined;
  Login: undefined;
  App: NavigatorScreenParams<AppTabParamList>;
};

type NestedNavConfig<
  T extends ParamListBase,
  Screen extends keyof T & string
> = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<T, Screen>,
    BottomTabNavigationProp<AppTabParamList>
  >;
  route: RouteProp<T, Screen>;
};

export type AppScreenPropa<Screen extends keyof AppTabParamList> =
  BaseNavConfig<AppTabParamList, Screen>;

export type AllStackScreenProps<Screen extends keyof AllStackParamList> =
  NestedNavConfig<AllStackParamList, Screen>;
