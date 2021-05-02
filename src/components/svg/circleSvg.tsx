import * as React from "react";
import { StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface CircleProps {
  discoverBooksList: boolean;
}

export function CircleSvg({ discoverBooksList }: CircleProps) {
  const { container, containerCurrentlyReading } = styles;

  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      style={discoverBooksList ? container : containerCurrentlyReading}
    >
      <Circle cx={10} cy={10} r={9} stroke="#4550A7" strokeWidth={2} />
    </Svg>
  );
}

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