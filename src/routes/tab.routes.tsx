import React from "react";
import { colors } from "../styles/colors";
import { Feather } from "@expo/vector-icons";
import { Home, Libraries, Profile } from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoutes from "./stack.routes";
import HomeStackRoutes from "./home.stack.routes";
import { Main } from "..";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => (
  <Navigator
    tabBarOptions={{
      activeTintColor: colors.black,
      inactiveTintColor: colors.grey,
      style: { height: 59, padding: 10 },
      keyboardHidesTabBar: true,
    }}
  >
    <Screen
      name={"Home"}
      component={Main}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather size={size} color={color} name={"home"} />
        ),
      }}
    />
    <Screen
      name={"Libraries"}
      component={Libraries}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather size={size} color={color} name={"book"} />
        ),
      }}
    />
    <Screen
      name={"Profile"}
      component={Profile}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather size={size} color={color} name={"user"} />
        ),
      }}
    />
  </Navigator>
);
