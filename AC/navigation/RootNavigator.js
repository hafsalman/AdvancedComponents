import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./HomeStack";
import ModalScreen from "../screens/ModalScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Modal"
        component={ModalScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack.Navigator>
  );
}