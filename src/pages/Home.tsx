import React, { useEffect } from "react";
import { FlatList } from "react-native";
import {
  Wrapper,
  HomeListContainer,
  DiscoverBookListContainer,
} from "../styles/pages/Home";
import {
  WelcomeMessage,
  DiscoverBookCard,
  ListTitle,
  CurrentlyReadingCard,
} from "../components";
import { OvalExternalSvg } from "../components/svg/";
import { ReviewsOfTheDaysCard } from "../components/ReviewsOfTheDaysCard";
import { data } from "../mock/discover-books.json";
import { useNavigation } from "@react-navigation/core";
import { useGlobalContext } from "../context/globalState";

const currentReadingImageMockUri =
  "http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api";

export function Home() {
  const { books } = useGlobalContext();
  const navigation = useNavigation();

  useEffect(() => {
    if (books.length > 0) navigation.navigate("BooksSearch", {searchValue: 'naruto'});
  }, [books]);

  return (
    <Wrapper>
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
        <ListTitle title={"Reviews of The Days "} buttonTitle={"All Video"} />
        <ReviewsOfTheDaysCard />
      </HomeListContainer>
    </Wrapper>
  );
}
