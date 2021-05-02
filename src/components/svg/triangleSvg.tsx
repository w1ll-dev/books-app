import * as React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export function TriangleSvg() {
  const { container } = styles;
  return (
    <Svg
      width={34}
      height={30}
      viewBox="0 0 34 30"
      fill="none"
      style={container}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.813.796L.5 29.013 33.368 7.68 3.813.796z"
        fill="#FCBC48"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: "25.97%",
    top: "2.73%",
    bottom: "76.97%",
  },
});
