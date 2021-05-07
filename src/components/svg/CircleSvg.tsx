import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { colors } from "../../styles/colors";

interface CircleProps {
  size: number;
  radius: number;
  left: number;
  top: number;
}

export default memo(({ left, top, size, radius }: CircleProps) => (
  <Svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    style={{ position: "absolute", left, top }}
  >
    <Circle
      cx={(size / 2).toFixed()}
      cy={(size / 2).toFixed()}
      r={9}
      stroke={colors.lightPurple}
      strokeWidth={2}
    />
  </Svg>
));
