import React from "react";
import { colors } from "../styles/colors";
import {
  Wrapper,
  BackgroundImage,
} from "../styles/components/ReviewsOfTheDaysCard";
import {
  BlankShapeSvg,
  OvalCurrentlyReadingSvg,
  TransparentCircularShape,
} from "./svg";

export function ReviewsOfTheDaysCard() {
  return (
    <Wrapper>
      <BackgroundImage />
      <OvalCurrentlyReadingSvg />
      <BlankShapeSvg
        width={60}
        height={20}
        backgroundColor={colors.beige}
        marginLeft={335}
        marginTop={-20}
      />
      <BlankShapeSvg
        width={25}
        height={60}
        backgroundColor={colors.beige}
        marginLeft={371}
        marginTop={0}
      />
      <TransparentCircularShape />
    </Wrapper>
  );
}
