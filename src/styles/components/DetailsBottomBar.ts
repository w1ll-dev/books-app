import styled from "styled-components/native";
import { colors } from "../colors";
import { CommonText, Container } from "../Common";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const leftDistance = (Dimensions.get("window").width / 2 - 168).toFixed();

export const Wrapper = styled.View`
  position: absolute;
  width: 335px;
  height: 56px;
  left: ${leftDistance}px;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  bottom: 0;
  border-radius: 2px;
  box-shadow: 3px 3px 3px ${colors.darkGrey};
  background: ${colors.white};
`;

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Label = styled(CommonText)`
  font-size: 14px;
  color: ${colors.darkerGrey};
  font-weight: bold;
`;

export const ReadIcon = styled(Ionicons).attrs(() => ({
  name: "book-outline",
  size: 24,
  color: colors.lightGrey,
}))`
  margin-right: 10px;
`;

export const ListenIcon = styled(FontAwesome5).attrs(() => ({
  name: "headphones",
  size: 24,
  color: colors.lightGrey,
}))`
  margin-right: 10px;
`;

export const ShareIcon = styled(Feather).attrs(() => ({
  name: "share",
  size: 24,
  color: colors.lightGrey,
}))`
  margin-right: 10px;
`;
