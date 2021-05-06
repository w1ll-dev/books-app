import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Details } from "../pages";
import { TabRoutes} from './tab.routes'
import { colors } from "../styles/colors";
import HomeStackRoutes from "./home.stack.routes";

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
    <Screen name="Home" component={TabRoutes} />
    <Screen name="Details" component={Details} />
  </Navigator>
);

export default StackRoutes;
