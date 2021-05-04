import styled from "styled-components/native";
import { colors } from "../colors";
import { Container, CommonText } from "../Common";

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

export const MessageText = styled(CommonText)`
  font-size: 24px;
  color: ${colors.darkerGrey};
`;

export const UserName = styled(CommonText)`
  font-size: 24px;
  color: ${colors.lightPink};
`;
