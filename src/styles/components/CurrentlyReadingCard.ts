import styled from "styled-components/native";
import { colors } from "../colors";
import { Container, CommonText } from "../Common";
import { fonts } from "../fonts";

export const Wrapper = styled.View`
  width: 331px;
  height: 136px;
  background: ${colors.beige};
  justify-content: center;
  margin: 0 -20px;
`;

export const Background = styled.View`
  width: 331px;
  height: 100px;
  justify-content: flex-start;
  background: ${colors.cream};
  position: absolute;
`;

export const BookImage = styled.Image`
  width: 91px;
  height: 136px;
  margin-left: 20px;
`;

export const BookInfoContainer = styled.View`
  justify-content: space-around;
  height: 100%;
  left: 119px;
`;

export const BookTitle = styled.Text`
  font-family: ${fonts.bookTitle};
  font-size: 20px;
  color: ${colors.dark};
`;

export const AuthorName = styled.Text`
  font-family: ${fonts.currentlyReadingAuthor};
  color: ${colors.concrete};
  font-size: 10px;
`;

export const ChapterInfoContainer = styled.View`
  flex-direction: row;
`;

export const ChapterText = styled(CommonText)`
  color: ${colors.darkBlue};
  font-size: 10px;
`;

export const ChapterValue = styled(CommonText)`
  color: ${colors.lightPink};
  font-size: 10px;
`;
