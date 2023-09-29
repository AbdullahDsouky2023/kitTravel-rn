import React from "react";
import HomeScreen from "./screens/HomeScreen";
import LogoScreen from "./screens/LogoScreen/LogoScreen";
import AuthIndex from "./screens/Auth/Index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Define the type for the Stack Navigator
type RootStackParamList = {
  HomeScreen: undefined;
  LogoScreen: undefined;
  AuthIndex:undefined;
};

// Create a Stack Navigator with the defined param list
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoScreen">
        <Stack.Screen
          name="LogoScreen"
          component={LogoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthIndex"
          component={AuthIndex}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
