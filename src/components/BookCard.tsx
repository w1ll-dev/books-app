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
}

export const BookCard = memo(
  ({ bookImageUri, bookTitle, bookAuthor }: BookCardProps) => (
    <Wrapper>
      <BookImage source={{ uri: bookImageUri }} />
      <BookTitle>{bookTitle}</BookTitle>
      <BookAuthor>{bookAuthor}</BookAuthor>
    </Wrapper>
  )
);
