import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BookCard } from "../components";
import { useGlobalContext } from "../context/globalState";
import { colors } from "../styles/colors";
import {
  BooksListContainer,
  LoadBooksButton,
  LoadBooksButtonLabel,
} from "../styles/pages/Home";

export function BooksSearch() {
  const { books, searchBooks, loadingBooks } = useGlobalContext();
  const navigation = useNavigation();

  useEffect(() => {
    if (books.length === 0) navigation.navigate("Home");
  }, [books]);

  return (
    <BooksListContainer>
      <FlatList
        data={books}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        keyExtractor={({ id }) => id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <BookCard
            bookImageUri={item.imageLinks?.thumbnail}
            bookTitle={item.title}
            bookAuthor={
              item.authors ? `by ${item.authors[0]}` : "without author"
            }
            bookAbout={item.description}
          />
        )}
        ListFooterComponent={
          loadingBooks ? (
            <ActivityIndicator color={colors.lightPurple} />
          ) : (
            <LoadBooksButton activeOpacity={0.6} onPress={() => searchBooks()}>
              <LoadBooksButtonLabel>Load Books</LoadBooksButtonLabel>
            </LoadBooksButton>
          )
        }
      />
    </BooksListContainer>
  );
}
