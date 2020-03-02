import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import SearchResultScreen from "./screens/SearchResultScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Root'
          component={BottomTabNavigator}
          options={{
            headerStyle: { backgroundColor: "#ef4923" },
            headerTitleStyle: { color: "#ffffff" }
          }}
        />
        <Stack.Screen
          name='SearchResult'
          component={SearchResultScreen}
          options={{
            title: "Search Results",
            headerStyle: { backgroundColor: "#ef4923" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#0a2e49"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
