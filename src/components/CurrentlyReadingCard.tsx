import React from "react";
import { View } from "react-native";
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
import {
  RectangleSvg,
  CircleSvg,
  OvalCurrentlyReadingSvg,
  BlankShapeSvg,
} from "./svg";

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
        <OvalCurrentlyReadingSvg />
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
        <CircleSvg radius={9} size={20} left={224} top={-6} />
        <BlankShapeSvg
          width={150}
          height={17}
          marginTop={-17}
          marginLeft={210}
          backgroundColor={colors.beige}
        />
        <BlankShapeSvg
          width={40}
          height={100}
          marginTop={-17}
          marginLeft={335}
          backgroundColor={colors.beige}
        />
      </Background>
      <BookImage source={{ uri: imageUri }} />
    </Wrapper>
  );
}
