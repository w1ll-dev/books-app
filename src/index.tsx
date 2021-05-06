import React from "react";
import { useEffect, useRef, useState } from "react";
import { Keyboard, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SearchInput } from "./components";
import { useDebounce } from "./hooks/useDebounce";
import { getBooks } from "./repository";
import { Book } from "./repository/protocols";
import { Routes } from "./routes";
import { Wrapper } from "./styles/pages/Home";

export function Main() {
  const [searchValue, setSearchValue] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loadingBooks, setLoadingBooks] = useState(false);

  const searchPageRef = useRef(0);

  const debouncedSearch = useDebounce(searchForBooks, 500);
  const debouncedLoad = useDebounce(loadMoreBooks, 500);

  async function searchForBooks() {
    searchPageRef.current = 0;
    if (searchValue === "") {
      setBooks([]);
      return;
    }

    setLoadingBooks(true);

    const newBooksList = await getBooks(searchValue, searchPageRef.current);
    setBooks(newBooksList);

    setLoadingBooks(false);
  }

  async function loadMoreBooks() {
    setLoadingBooks(true);
    searchPageRef.current = searchPageRef.current + 1;

    const booksList = await getBooks(searchValue, searchPageRef.current);
    const newBooksList = [...books, ...booksList];

    setBooks(newBooksList);
    setLoadingBooks(false);
  }

  useEffect(() => {
    debouncedSearch();
  }, [searchValue]);

  return (
    <Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SearchInput
          placeholder={"Search book"}
          blurOnSubmit={true}
          onChangeText={setSearchValue}
          value={searchValue}
        />
      </TouchableWithoutFeedback>
      <Routes />
    </Wrapper>
  );
}
