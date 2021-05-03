import React from "react";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { SearchInput } from "../styles/components/SearchInput";
import { HomeListContainer, Wrapper } from "../styles/pages/Home";
import {
  WelcomeMessage,
  DiscoverBookCard,
  ListTitle,
  CurrentlyReadingCard,
} from "../components";
import { ScrollView } from "react-native-gesture-handler";
import { OvalExternalSvg } from "../components/svg/";
import { colors } from "../styles/colors";

const currentReadingUri =
  "http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api";
const discoverNewBookUri =
  "http://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";

export function Home() {
  return (
    <Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <HomeListContainer>
          <SearchInput placeholder={"Search book"} />
          <WelcomeMessage username={"Mehmed Al Fatih"} />
        </HomeListContainer>
      </TouchableWithoutFeedback>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeListContainer>
          <OvalExternalSvg />
          <ListTitle title={"Discover new book"} buttonTitle={"More"} />
          <DiscoverBookCard
            cardBackground={colors.darkBlue}
            title={"Hooked"}
            author={"Nir Eyal"}
            imageUri={discoverNewBookUri}
            readStats={"120+"}
          />
        </HomeListContainer>
        <HomeListContainer>
          <ListTitle title={"Currently Reading"} buttonTitle={"All"} />
          <CurrentlyReadingCard
            title={"Originals"}
            author={"Adam Grant"}
            imageUri={currentReadingUri}
            currentChapter={2}
            totalChapter={9}
          />
        </HomeListContainer>
        <HomeListContainer>
          <ListTitle title={"Reviews of The Days "} buttonTitle={"All Video"} />
          <DiscoverBookCard cardBackground={colors.darkBlue} title={"Hooked"} />
        </HomeListContainer>
      </ScrollView>
    </Wrapper>
  );
}
