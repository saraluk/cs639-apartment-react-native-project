import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "./screens/SearchScreen";
import SearchResultScreen from "./screens/SearchResultScreen";
import SavedScreen from "./screens/SavedScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import ApartmentDetailScreen from "./screens/ApartmentDetailScreen";

const SearchStack = createStackNavigator();

function SearchStackScreen({ navigation }) {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          title: "Search",
          headerStyle: { backgroundColor: "#ef4923" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#0a2e49",
        }}
      />
      <SearchStack.Screen
        name='SearchResultScreen'
        component={SearchResultScreen}
        options={{
          title: "Search Results",
          headerStyle: { backgroundColor: "#ef4923" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#0a2e49",
        }}
      />
      <SearchStack.Screen
        name='ApartmentDetailScreen'
        component={ApartmentDetailScreen}
        options={{
          title: "Detail",
          headerStyle: { backgroundColor: "#ef4923" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#0a2e49",
        }}
      />
    </SearchStack.Navigator>
  );
}
const SavedStack = createStackNavigator();
function SavedStackScreen() {
  return (
    <SavedStack.Navigator>
      <SavedStack.Screen
        name='SavedScreen'
        component={SavedScreen}
        options={{
          title: "Saved",
          headerStyle: { backgroundColor: "#ef4923" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#0a2e49",
        }}
      />
      <SavedStack.Screen
        name='ApartmentDetailScreen'
        component={ApartmentDetailScreen}
        options={{
          title: "Detail",
          headerStyle: { backgroundColor: "#ef4923" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#0a2e49",
        }}
      />
    </SavedStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerStyle: { backgroundColor: "#ef4923" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#0a2e49",
        }}
      />
      <ProfileStack.Screen
        name='EditProfileScreen'
        component={EditProfileScreen}
        options={{
          title: "Edit Profile",
          headerStyle: { backgroundColor: "#ef4923" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#0a2e49"
        }}
      />
    </ProfileStack.Navigator>
  );
}

const EditProfileStack = createStackNavigator();
function EditProfileStackScreen() {
  return (
    <EditProfileStack.Navigator>
      <EditProfileStack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerStyle: { backgroundColor: "#ef4923" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#0a2e49"
        }}
      />
    </EditProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Search") {
              iconName = "ios-search";
            } else if (route.name === "Saved") {
              iconName = "ios-bookmark";
            } else if (route.name === "Profile") {
              iconName = "md-person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ef4923",
          inactiveTintColor: "#333333",
        }}
      >
        <Tab.Screen name='Search' component={SearchStackScreen} />
        <Tab.Screen name='Saved' component={SavedStackScreen} />
        <Tab.Screen name='Profile' component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
