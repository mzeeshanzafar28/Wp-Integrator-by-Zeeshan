import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import AboutZeeshan from "@screens/AboutZeeshan";
import SitePage from "@screens/SitePage";
import ExplorePage from "@screens/ExplorePage";
import PostDetails from "@screens/PostDetails";
import HackerLoginForm from "@screens/hackerloginform";
import { RootStackParamList } from "@navigation/navigationTypes";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const ExploreStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Explore" component={ExplorePage} />
    <Stack.Screen name="PostDetails" component={PostDetails} />
  </Stack.Navigator>
);

const AppNavigator: React.FC = () => {
  const tabBarIcon = ({ route, focused, color, size }) => {
    let iconName;

    if (route.name === "ExploreStack") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "Site") {
      iconName = focused ? "globe-outline" : "globe-outline";
    } else if (route.name === "Zeeshan") {
      iconName = focused ? "person-circle" : "person-circle-outline";
    }
    return <Ionicons name={iconName} size={size} color="crimson" />;
  };

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) =>
        tabBarIcon({ route, focused, color, size }),
      tabBarActiveTintColor: "green",
      tabBarInactiveTintColor: "crimson",
    })}
    >
      <Tab.Screen name="Login" component={HackerLoginForm} options={{ headerShown: false, tabBarStyle: { display: 'none' } }} />
      <Tab.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false, tabBarStyle: { display: 'none' } }} />
    </Tab.Navigator>
  );
};

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Site"
        component={SitePage}
        options={{
          tabBarLabel: 'Site',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="globe-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Zeeshan"
        component={AboutZeeshan}
        options={{
          tabBarLabel: 'Zeeshan',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const TabNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExploreStack" component={ExploreStack} options={{ headerShown: false, title: "Explore" }} />
      <Stack.Screen name="Site" component={SitePage} />
      <Stack.Screen name="Zeeshan" component={AboutZeeshan} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
