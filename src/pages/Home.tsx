import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Wrapper,
  HomeListContainer,
  DiscoverBookListContainer,
  BooksListContainer,
  LoadBooksButton,
  LoadBooksButtonLabel,
} from "../styles/pages/Home";
// import { SearchIcon, SearchInput } from "../styles/components/SearchInput";
import {
  WelcomeMessage,
  DiscoverBookCard,
  ListTitle,
  CurrentlyReadingCard,
  BookCard,
  SearchInput,
} from "../components";
import { ScrollView } from "react-native-gesture-handler";
import { OvalExternalSvg } from "../components/svg/";
import { ReviewsOfTheDaysCard } from "../components/ReviewsOfTheDaysCard";
import { data } from "../mock/discover-books.json";
import { getBooks } from "../repository";
import { Book } from "../repository/protocols";
import { colors } from "../styles/colors";
import { useDebounce } from "../hooks/useDebounce";
import { useNavigation } from "@react-navigation/core";

const currentReadingImageMockUri =
  "http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api";


  
export function Home() {

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.beige }}
    >
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
    </ScrollView>
    // <Wrapper>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //     <SearchInput
    //       placeholder={"Search book"}
    //       blurOnSubmit={true}
    //       onChangeText={setSearchValue}
    //       value={searchValue}
    //     />
    //   </TouchableWithoutFeedback>
    //   {books.length === 0 ? (
    //     <ScrollView showsVerticalScrollIndicator={false}>
    //       <HomeListContainer>
    //         <WelcomeMessage username={"Mehmed Al Fatih"} />
    //         <ListTitle title={"Discover new book"} buttonTitle={"More"} />
    //         <DiscoverBookListContainer>
    //           <FlatList
    //             data={data}
    //             keyExtractor={({ id }) => String(id)}
    //             horizontal={true}
    //             showsHorizontalScrollIndicator={false}
    //             renderItem={({ item, index }) => (
    //               <DiscoverBookCard
    //                 firstCard={index === 0}
    //                 backgroundColor={item.backgoundColor}
    //                 title={item.title}
    //                 author={item.author}
    //                 imageUri={item.imageUri}
    //                 readStats={item.readStats}
    //               />
    //             )}
    //           />
    //         </DiscoverBookListContainer>
    //         <OvalExternalSvg />
    //       </HomeListContainer>
    //       <HomeListContainer>
    //         <ListTitle title={"Currently Reading"} buttonTitle={"All"} />
    //         <CurrentlyReadingCard
    //           title={"Originals"}
    //           author={"Adam Grant"}
    //           imageUri={currentReadingImageMockUri}
    //           currentChapter={2}
    //           totalChapter={9}
    //         />
    //       </HomeListContainer>
    //       <HomeListContainer>
    //         <ListTitle
    //           title={"Reviews of The Days "}
    //           buttonTitle={"All Video"}
    //         />
    //         <ReviewsOfTheDaysCard />
    //       </HomeListContainer>
    //     </ScrollView>
    //   ) : (
    //     <BooksListContainer>
    //       <FlatList
    //         data={books}
    //         showsVerticalScrollIndicator={false}
    //         numColumns={3}
    //         keyExtractor={({ id }) => id}
    //         columnWrapperStyle={{ justifyContent: "space-between" }}
    //         renderItem={({ item }) => (
    //           <BookCard
    //             onSelected={() => onBookSelected(item)}
    //             bookImageUri={item.imageLinks?.thumbnail}
    //             bookTitle={item.title}
    //             bookAuthor={
    //               item.authors ? `by ${item.authors[0]}` : "without author"
    //             }
    //           />
    //         )}
    //         ListFooterComponent={
    //           loadingBooks ? (
    //             <ActivityIndicator color={colors.lightPurple} />
    //           ) : (
    //             <LoadBooksButton activeOpacity={0.6} onPress={debouncedLoad}>
    //               <LoadBooksButtonLabel>Load Books</LoadBooksButtonLabel>
    //             </LoadBooksButton>
    //           )
    //         }
    //       />
    //     </BooksListContainer>
    //   )}
    // </Wrapper>
  );
}
