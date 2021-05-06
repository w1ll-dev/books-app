import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Details, Home } from "../pages";
import { colors } from "../styles/colors";

const { Navigator, Screen } = createStackNavigator();

const StackRoutes = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <Screen name="Home" component={Home} />
    <Screen name="Details" component={Details} />
  </Navigator>
);

export default StackRoutes;
