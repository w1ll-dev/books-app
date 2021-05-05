import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { colors } from "../colors";
import { fonts } from "../fonts";

const statusBarHeight = getStatusBarHeight();

export const SearchInput = styled.TextInput`
  height: 48px;
  margin: ${statusBarHeight + 50}px 20px 0px;
  padding: 0 16px;
  color: ${colors.black};
  background: ${colors.white};
  align-items: flex-start;
  border-radius: 10px;
  font-family: ${fonts.title};
  font-weight: bold;
  font-size: 16px;
  padding-left: 41px;
  margin-bottom: 30px;
`;
