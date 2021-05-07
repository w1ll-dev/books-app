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
  backgroundColor: string;
  author?: string;
  imageUri?: string;
  readStats?: number;
  firstCard?: boolean;
}

export function DiscoverBookCard({
  title,
  backgroundColor,
  author,
  imageUri,
  readStats,
  firstCard,
}: DiscoverBookCardProps) {
  return (
    <Wrapper
      style={{
        backgroundColor,
        width: firstCard ? 272 : 250,
        height: firstCard ? 139 : 128,
        marginTop: !firstCard ? 5 : 0,
      }}
    >
      {firstCard && <OvalSvg />}
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
            <ReadStatsValue>{`${readStats}+ `}</ReadStatsValue>
            <ReadStatsText>Read Now</ReadStatsText>
          </StatsContainer>
        )}
      </BookNameContainer>
      <BookImage source={{ uri: imageUri }} />
      <RectangleSvg discoverBooksList={true} />
      <TriangleSvg />
      <CircleSvg size={20} left={144} top={14} radius={9}/>
    </Wrapper>
  );
}
