import React, { memo } from "react";
import Svg, { Circle, Defs, Pattern, Image, Use } from "react-native-svg";

export default memo(() => (
  <Svg
    width={62}
    height={83}
    viewBox="0 0 62 83"
    fill="none"
    style={{
      position: "absolute",
      top: 0,
      right: 0,
    }}
  >
    <Circle
      cx={51}
      cy={32}
      r={50}
      transform="rotate(25 51 32)"
      fill="url(#prefix__pattern0)"
    />
    <Defs>
      <Pattern
        id="prefix__pattern0"
        patternContentUnits="objectBoundingBox"
        width={0.406}
        height={0.072}
      >
        <Use xlinkHref="#prefix__image0" transform="scale(.01194)" />
      </Pattern>
      <Image
        id="prefix__image0"
        width={34}
        height={6}
        xlinkHref={{
          uri:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC",
        }}
      />
    </Defs>
  </Svg>
));
