import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import { Main } from "./src";
import { View } from "react-native";

export default function App() {
  const [loaded] = useFonts({
    SFProTextRegular: require("./src/assets/fonts/SFProText-Regular.ttf"),
    PlayfairDisplay: require("./src/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    Roboto: require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return <Main />;
}
