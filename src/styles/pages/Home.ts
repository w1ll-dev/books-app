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

export const DiscoverBookListContainer = styled.View`
  margin-right: -20px;
`;

export const BooksListContainer = styled(HomeListContainer)`
  flex: 1;
`;
