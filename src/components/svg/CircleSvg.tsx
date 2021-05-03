import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { colors } from "../../styles/colors";

interface CircleProps {
  discoverBooksList: boolean;
}

export default memo(({ discoverBooksList }: CircleProps) => {
  const { container, containerCurrentlyReading } = styles;

  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      style={discoverBooksList ? container : containerCurrentlyReading}
    >
      <Circle
        cx={10}
        cy={10}
        r={9}
        stroke={colors.lightPurple}
        strokeWidth={2}
      />
    </Svg>
  );
});

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: "40.44%",
    top: "10.07%",
    bottom: "76.98%",
  },
  containerCurrentlyReading: {
    position: "absolute",
    left: 223,
    top: -7,
  },
});
