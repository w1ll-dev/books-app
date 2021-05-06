import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, BooksSearch } from "../pages";
import { colors } from "../styles/colors";

const { Navigator, Screen } = createStackNavigator();

const HomeStackRoutes = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <Screen name="Home" component={Home} />
    <Screen name="BooksSearch" component={BooksSearch} />
  </Navigator>
);

export default HomeStackRoutes;
