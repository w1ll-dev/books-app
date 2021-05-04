import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { colors } from "../colors";
import { fonts } from "../fonts";

const statusBarHeight = getStatusBarHeight();

export const SearchInput = styled.TextInput`
  width: 100%;
  height: 48px;
  margin-top: ${statusBarHeight + 50}px;
  padding: 0 16px;
  color: ${colors.darkGrey};
  background: ${colors.white};
  align-items: flex-start;
  border-radius: 10px;
  font-family: ${fonts.title};
  font-size: 16px;
  padding-left: 41px;
`;
