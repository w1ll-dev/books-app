import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Wrapper,
  BookImage,
  BookTitle,
  BookAuthor,
} from "../styles/components/BookCard";

interface BookCardProps {
  bookImageUri?: string;
  bookTitle: string;
  bookAuthor: string;
  bookAbout: string;
}

export function BookCard({
  bookImageUri,
  bookTitle,
  bookAuthor,
  bookAbout
}: BookCardProps) {
  const navigation = useNavigation();

  function onBookSelected() {
    navigation.navigate("Details", {
      bookImageUri,
      bookTitle,
      bookAuthor,
      bookAbout,
    });
  }

  return (
    <Wrapper onPress={onBookSelected}>
      <BookImage source={{ uri: bookImageUri }} />
      <BookTitle>{bookTitle}</BookTitle>
      <BookAuthor>{bookAuthor}</BookAuthor>
    </Wrapper>
  );
}
