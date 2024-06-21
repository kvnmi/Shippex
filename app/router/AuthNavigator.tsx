import LandingPage from "@/screens/LandingPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./AppNavigator";
import { AllStackParamList } from "./navigationTypes";
import LoginPage from "@/screens/LoginPage";

const Stack = createNativeStackNavigator<AllStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarHidden: true,
      }}
      initialRouteName="LandingPage"
    >
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  );
}
