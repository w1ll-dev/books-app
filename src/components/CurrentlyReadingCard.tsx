import React from "react";
import {
  Wrapper,
  Background,
  BookImage,
  AuthorName,
  BookTitle,
  BookInfoContainer,
  ChapterInfoContainer,
  ChapterText,
  ChapterValue,
} from "../styles/components/CurrentlyReadingCard";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { Container } from "../styles/Common";
import { OvalSvg, RectangleSvg, CircleSvg, TriangleSvg } from "./svg";
import { View } from "react-native";

interface DiscoverBookCardProps {
  title: string;
  author?: string;
  imageUri?: string;
  currentChapter?: number;
  totalChapter?: number;
}

export function CurrentlyReadingCard({
  title,
  author,
  imageUri,
  currentChapter,
  totalChapter,
}: DiscoverBookCardProps) {
  return (
    <Wrapper>
      <Background>
        <BookInfoContainer>
          <View>
            <BookTitle>{title}</BookTitle>
            <AuthorName>{`by ${author}`}</AuthorName>
          </View>
          <ChapterInfoContainer>
            <AntDesign name="book" size={20} color={colors.purple} />
            <ChapterText>{"Chapter "}</ChapterText>
            <ChapterValue>{`${currentChapter} `}</ChapterValue>
            <ChapterText>{`From ${totalChapter}`}</ChapterText>
          </ChapterInfoContainer>
        </BookInfoContainer>
        <RectangleSvg discoverBooksList={false} />
        <CircleSvg discoverBooksList={false} />
      </Background>
      <BookImage source={{ uri: imageUri }} />
    </Wrapper>
  );
}
