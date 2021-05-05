import styled from "styled-components/native";
import { colors } from "../colors";
import { CommonText } from "../Common";

export const Wrapper = styled.TouchableOpacity`
  width: 105px;
  /* height: 193px; */
  /* margin: 10px 17px 14px 0; */
  margin-top: 10px;
`;

export const BookImage = styled.Image`
  width: 105px;
  height: 153px;
  margin-bottom: 9px;
`;

export const BookTitle = styled(CommonText)`
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 5px;
  color: ${colors.darkGreyWithOpacity};
`;

export const BookAuthor = styled(CommonText)`
  font-weight: bold;
  font-size: 10px;
  color: ${colors.darkGreyWithOpacity}
`;
