import * as React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../styles/colors";

interface RectangleProps {
  discoverBooksList: boolean;
}

export function RectangleSvg({discoverBooksList}: RectangleProps) {
  const { container, containerCurrentlyReading  } = styles;
  return (
    <Svg
      width={46}
      height={16}
      viewBox="0 0 46 16"
      fill="none"
      style={discoverBooksList ? container : containerCurrentlyReading}
    >
      <Path
        fill={colors.lightPink}
        d="M1.167.495l44.634 11.128-.968 3.882L.199 4.376z"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: "29.72%",
    bottom: "28.42%",
  },
  containerCurrentlyReading: {
    position: "absolute",
    right: -20,
    bottom: "28.42%",
  },
});
