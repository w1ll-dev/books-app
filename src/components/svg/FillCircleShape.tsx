import React, { memo } from "react";
import Svg, { Circle } from "react-native-svg";

interface FillCircleShape {
  circleDiameter: number;
  backgroundColor: string;
  top: number;
  left: number;
}

export default memo(
  ({ circleDiameter, backgroundColor, top, left }: FillCircleShape) => {
    return (
      <Svg
        width={circleDiameter}
        height={circleDiameter}
        viewBox={`0 0 ${circleDiameter} ${circleDiameter}`}
        fill="none"
        style={{ position: "absolute", top, left }}
      >
        <Circle
          cx={circleDiameter / 2}
          cy={circleDiameter / 2}
          r={circleDiameter / 2}
          fill={backgroundColor}
        />
      </Svg>
    );
  }
);
