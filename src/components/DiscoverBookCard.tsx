import React from "react";
import {
  Wrapper,
  BookNameContainer,
  BookTitle,
  BookImage,
  BookAuthor,
  StatsContainer,
  ReadStatsText,
  ReadStatsValue,
} from "../styles/components/DiscoverBookCard";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { Container } from "../styles/Common";
import { OvalSvg, RectangleSvg, CircleSvg, TriangleSvg } from "./svg";

interface DiscoverBookCardProps {
  title: string;
  cardBackground: string;
  author?: string;
  imageUri?: string;
  readStats?: string;
}

export function DiscoverBookCard({
  title,
  cardBackground,
  author,
  imageUri,
  readStats,
}: DiscoverBookCardProps) {
  return (
    <Wrapper style={{ backgroundColor: cardBackground }}>
      <OvalSvg />
      <BookNameContainer>
        <Container>
          <BookTitle>{title}</BookTitle>
          <BookAuthor>{author}</BookAuthor>
        </Container>
        {readStats && (
          <StatsContainer>
            <MaterialIcons
              name="insert-chart-outlined"
              size={20}
              color={colors.grey}
            />
            <ReadStatsValue>{`${readStats} `}</ReadStatsValue>
            <ReadStatsText>Read Now</ReadStatsText>
          </StatsContainer>
        )}
      </BookNameContainer>
      <BookImage source={{ uri: imageUri }} />
      <RectangleSvg discoverBooksList={true} />
      <TriangleSvg />
      <CircleSvg discoverBooksList={true} />
    </Wrapper>
  );
}
