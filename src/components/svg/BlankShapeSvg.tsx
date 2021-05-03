import React, { memo } from "react";
import Svg, { Rect } from "react-native-svg";

interface BlankShapeSvg {
  width: number;
  height: number;
  marginTop: number;
  marginLeft: number;
  backgroundColor: string;
}

export default memo(
  ({
    width,
    height,
    marginTop,
    marginLeft,
    backgroundColor,
  }: BlankShapeSvg) => (
    <Svg
      width={width}
      height={height}
      style={{ marginTop, marginLeft, position: "absolute" }}
    >
      <Rect height={height} width={width} fill={backgroundColor} />
    </Svg>
  )
);
