import React, { memo } from "react";
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
  onSelected: any
}

export const BookCard = memo(
  ({ bookImageUri, bookTitle, bookAuthor, onSelected }: BookCardProps) => (
    <Wrapper onPress={onSelected}>
      <BookImage source={{ uri: bookImageUri }} />
      <BookTitle>{bookTitle}</BookTitle>
      <BookAuthor>{bookAuthor}</BookAuthor>
    </Wrapper>
  )
);
