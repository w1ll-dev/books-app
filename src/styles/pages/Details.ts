import styled from "styled-components/native";
import { CommonText, Container } from "../Common";
import { colors } from "../colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { AntDesign } from "@expo/vector-icons";

const statusBarHeight = getStatusBarHeight();

export const Wrapper = styled(Container)`
  background: ${colors.white};
  padding: 0 20px 0 21px;
`;

export const HeaderBackground = styled.View`
  height: 282px;
  background: ${colors.lightYellow};
  border-bottom-right-radius: 100px;
  margin: 0 -21px 67px;
`;

export const BookImage = styled.Image`
  width: 151px;
  height: 234px;
  position: absolute;
  left: 114px;
  top: ${statusBarHeight + 84}px;
`;

export const BookTitle = styled(CommonText)`
  font-size: 24px;
  color: ${colors.graphite};
  margin-bottom: 7px;
`;

export const BookAuthor = styled(CommonText)`
  font-size: 16px;
  color: ${colors.lightPink};
  margin-bottom: 10px;
`;

export const BookAbout = styled(CommonText)`
  font-size: 14px;
  color: ${colors.darkGreyWithOpacitySixty};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 33px;
  top: ${statusBarHeight + 55};
  width: 25px;
  height: 25px;
`;

export const BackArrow = styled(AntDesign).attrs(() => ({
  name: "arrowleft",
  size: 25,
  color: colors.black,
}))`
  position: absolute;
  left: 33px;
  top: ${statusBarHeight + 55};
`;
