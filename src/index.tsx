import React from "react";
import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SearchInput } from "./components";
import { useGlobalContext } from "./context/globalState";
import HomeStackRoutes from "./routes/home.stack.routes";
import { Wrapper } from "./styles/pages/Main";

export function Main() {
  const { searchBooks } = useGlobalContext();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue === "") Keyboard.dismiss;
    
    searchBooks(searchValue);
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
      <HomeStackRoutes />
    </Wrapper>
  );
}
