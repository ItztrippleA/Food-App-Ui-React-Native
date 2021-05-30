import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "./assets/colors/colors";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./components/Home";

const Stack = createStackNavigator();

export default function App() {
  {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texting: {
    color: colors.secondary,
    fontSize: 28,
  },
});
