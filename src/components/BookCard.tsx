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
}

export function BookCard({ bookImageUri, bookTitle, bookAuthor }: BookCardProps) {
  return (
    <Wrapper>
      <BookImage source={{ uri: bookImageUri }} />
      <BookTitle>{bookTitle}</BookTitle>
      <BookAuthor>{bookAuthor}</BookAuthor>
    </Wrapper>
  );
}
