import styled from "styled-components/native";
import { Container } from "../Common";
import { colors } from "../colors";
import { fonts } from "../fonts";

export const Wrapper = styled(Container)`
  background: ${colors.beige};
`;

export const HomeListContainer = styled.View`
  margin: 0 20px 30px;
`;

export const DiscoverBookListContainer = styled.View`
  margin-right: -20px;
`;

export const BooksListContainer = styled(HomeListContainer)`
  flex: 1;
`;

export const LoadBooksButton = styled.TouchableOpacity`
  margin: 15px 0 10px;
  padding: 10px;
  background: ${colors.darkGrey};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const LoadBooksButtonLabel = styled.Text`
  font-family: ${fonts.currentlyReadingAuthor};
  font-size: 15px;
  color: ${colors.white};
`;
