import styled from "styled-components/native";
import { CommonText, Container } from "../Common";
import { colors } from "../colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { AntDesign } from "@expo/vector-icons";

const statusBarHeight = getStatusBarHeight();

export const Wrapper = styled(Container)`
  background: ${colors.white};
  margin-bottom: 53px;
`;

export const HeaderBackground = styled.View`
  height: 282px;
  background: ${colors.lightYellow};
  border-bottom-right-radius: 100px;
`;

export const BookImage = styled.Image`
  width: 140px;
  height: 220px;
  position: absolute;
  left: 125px;
  top: 84px;
`;

export const BookTitle = styled(CommonText)`
  font-size: 24px;
  color: ${colors.graphite};
  margin-bottom: 7px;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  padding: 67px 20px 30px 21px;
`;

export const BookAuthor = styled(CommonText)`
  font-size: 16px;
  color: ${colors.lightPink};
  margin-bottom: 10px;
`;

export const BookAbout = styled(CommonText)`
  font-size: 14px;
  color: ${colors.darkGreyWithOpacitySixty};
  line-height: 29px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 33px;
  top: ${statusBarHeight + 55}px;
`;

export const BackArrow = styled(AntDesign).attrs(() => ({
  name: "arrowleft",
  size: 25,
  color: colors.black,
}))`
  position: absolute;
`;
