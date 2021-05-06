import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { colors } from "../colors";
import { fonts } from "../fonts";
import { Ionicons } from "@expo/vector-icons";

const statusBarHeight = getStatusBarHeight();

export const StyledSearchInput = styled.TextInput`
  height: 48px;
  color: ${colors.black};
  background: ${colors.white};
  align-items: flex-start;
  border-radius: 10px;
  font-family: ${fonts.title};
  font-weight: bold;
  font-size: 16px;
  padding-left: 41px;
`;

export const Wrapper = styled.View`
  margin: ${statusBarHeight + 50}px 20px 0px;
  margin-bottom: 30px;
  justify-content: center;
`;

export const SearchIcon = styled(Ionicons).attrs(() => ({
  name: "search-outline",
  size: 18,
  color: colors.grey,
}))`
  position: absolute;
  transform: scaleX(-1);
  margin-left: 15px;
`;