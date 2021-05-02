import styled from "styled-components/native";
import { Container } from "../Common";
import { colors } from "../colors";

export const Wrapper = styled(Container)`
  background: ${colors.beige};
`;

export const HomeListContainer = styled.View`
  margin: 0 20px 30px;
`;

export const CurrentlyReadingContainer = styled.View`
  margin: 0 0 30px;
`;
