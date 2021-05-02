import styled from "styled-components/native";
import { colors } from "../colors";
import { Container, CommonText } from "../Common";
import { fonts } from "../fonts";

export const Wrapper = styled(Container)`
  width: 272px;
  height: 139px;
  align-items: center;
  background: ${colors.darkBlue};
  flex-direction: row;
  border-radius: 5px;
  padding: 20px 15px;
`;

export const BookNameContainer = styled(Container)`
  justify-content: space-between;
`;

export const BookTitle = styled.Text`
  font-family: ${fonts.bookTitle};
  font-size: 27px;
  color: ${colors.lightBeige};
`;

export const BookAuthor = styled(CommonText)`
  font-size: 14px;
  font-family: ${fonts.title};
  color: ${colors.lightGrey};
  font-style: italic;
`;

export const BookImage = styled.Image`
  width: 72px;
  height: 111px;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ReadStatsValue = styled(CommonText)`
  color: ${colors.lightGrey};
  font-size: 10px;
  font-weight: bold;
`;

export const ReadStatsText = styled(CommonText)`
  color: ${colors.lightGrey};
  font-size: 10px;
`;
