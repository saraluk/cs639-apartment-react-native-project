import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import SearchScreen from "../screens/SearchScreen";
import SavedScreen from "../screens/SavedScreen";
import ProfileScreen from "../screens/ProfileScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Search";

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-search' />
          )
        }}
      />
      <BottomTab.Screen
        name='Saved'
        component={SavedScreen}
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-bookmark' />
          )
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-person' />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Search":
      return "Search";
    case "Saved":
      return "Saved";
    case "Profile":
      return "Profile";
  }
}
