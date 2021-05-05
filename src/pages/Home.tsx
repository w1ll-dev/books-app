import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { SearchInput } from "../styles/components/SearchInput";
import {
  Wrapper,
  HomeListContainer,
  DiscoverBookListContainer,
  BooksListContainer,
} from "../styles/pages/Home";
import {
  WelcomeMessage,
  DiscoverBookCard,
  ListTitle,
  CurrentlyReadingCard,
  BookCard,
} from "../components";
import { ScrollView } from "react-native-gesture-handler";
import { OvalExternalSvg } from "../components/svg/";
import { ReviewsOfTheDaysCard } from "../components/ReviewsOfTheDaysCard";
import { data } from "../mock/discover-books.json";
import { getBooks } from "../repository";
import { Book } from "../repository/protocols";

const currentReadingImageMockUri =
  "http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api";

export function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  async function searchForBooks(bookInfo: string) {
    if (bookInfo === "") {
      setBooks([]);
      return;
    }

    const booksList = await getBooks(bookInfo, 0);
    setBooks(booksList);
  }

  return (
    <Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <HomeListContainer>
          <SearchInput
            placeholder={"Search book"}
            blurOnSubmit={true}
            onChangeText={async (data) => searchForBooks(data)}
          />
        </HomeListContainer>
      </TouchableWithoutFeedback>
      {books.length === 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeListContainer>
            <WelcomeMessage username={"Mehmed Al Fatih"} />
            <ListTitle title={"Discover new book"} buttonTitle={"More"} />
            <DiscoverBookListContainer>
              <FlatList
                data={data}
                keyExtractor={({ id }) => String(id)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <DiscoverBookCard
                    firstCard={index === 0}
                    backgroundColor={item.backgoundColor}
                    title={item.title}
                    author={item.author}
                    imageUri={item.imageUri}
                    readStats={item.readStats}
                  />
                )}
              />
            </DiscoverBookListContainer>
            <OvalExternalSvg />
          </HomeListContainer>
          <HomeListContainer>
            <ListTitle title={"Currently Reading"} buttonTitle={"All"} />
            <CurrentlyReadingCard
              title={"Originals"}
              author={"Adam Grant"}
              imageUri={currentReadingImageMockUri}
              currentChapter={2}
              totalChapter={9}
            />
          </HomeListContainer>
          <HomeListContainer>
            <ListTitle
              title={"Reviews of The Days "}
              buttonTitle={"All Video"}
            />
            <ReviewsOfTheDaysCard />
          </HomeListContainer>
        </ScrollView>
      ) : (
        <BooksListContainer>
          <FlatList
            data={books}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <BookCard
                bookImageUri={item.imageLinks?.thumbnail}
                bookTitle={item.title}
                bookAuthor={
                  item.authors ? `by ${item.authors[0]}` : "without author"
                }
              />
            )}
          />
        </BooksListContainer>
      )}
    </Wrapper>
  );
}
