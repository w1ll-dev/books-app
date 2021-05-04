import styled from "styled-components/native";
import { colors } from "../colors";
import { Container, CommonText } from "../Common";

export const Wrapper = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Title = styled(CommonText)`
  font-size: 18px;
  color: ${colors.darkerGrey};
`;

export const ButtonTitle = styled(CommonText)`
  font-size: 14px;
  color: ${colors.lightBlue};
`;
