import { useRef, useState } from "react";
import { useDebounce } from "./useDebounce";
import { getBooks } from "../repository";
import { Book } from "../repository/protocols";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loadingBooks, setLoadingBooks] = useState(false);
  const debouncedSearch = useDebounce(searchForBooks, 500);
  const searchValueRef = useRef("");
  const searchPageRef = useRef(0);

  async function searchForBooks(searchValue?: string) {
    if (searchValue !== undefined) {
      if (searchValue === "") {
        setBooks([]);
        return;
      }
      searchValueRef.current = searchValue;
      searchPageRef.current = 0;
      const newBooksList = await getBooks(searchValue, searchPageRef.current);
      setBooks(newBooksList);
    } else {
      setLoadingBooks(true);
      searchPageRef.current = searchPageRef.current + 1;
      const booksLoaded = await getBooks(
        searchValueRef.current,
        searchPageRef.current
      );
      const newBooksList = [...books, ...booksLoaded];
      setBooks(newBooksList);
      setLoadingBooks(false);
    }
  }

  return [books, debouncedSearch, loadingBooks] as [
    Book[],
    (searchValue?: string) => Book[],
    boolean
  ];
}
