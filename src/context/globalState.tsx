import React from "react";
import { useBooks } from "../hooks/useBooks";
import { createContext, useContext } from "react";
import { Book } from "../repository/protocols";

export interface GlobalContent {
  books: Book[];
  searchBooks: (searchValue?: string) => void;
  loadingBooks: boolean;
}

export const MyGlobalContext = createContext<GlobalContent>({
  books: [],
  searchBooks: (searchValue?: string) => {},
  loadingBooks: false,
});

export const StateProvider: React.FC = ({ children }) => {
  const [books, searchBooks, loadingBooks] = useBooks();

  return (
    <MyGlobalContext.Provider value={{ books, searchBooks, loadingBooks }}>
      {children}
    </MyGlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(MyGlobalContext);
