import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FillCircleShape } from "../components/svg";
import { colors } from "../styles/colors";
import {
  BookTitle,
  BackArrow,
  BookAbout,
  BookAuthor,
  BookImage,
  HeaderBackground,
  Wrapper,
  BackButton,
} from "../styles/pages/Details";

const statusBarHeight = getStatusBarHeight();

interface Params {
  bookImageUri?: string;
  bookTitle: string;
  bookAuthor: string;
  bookAbout: string;
}

export function Details() {
  const routes = useRoute();
  const navigation = useNavigation();

  const {
    bookImageUri,
    bookTitle,
    bookAuthor,
    bookAbout,
  } = routes.params as Params;

  return (
    <Wrapper>
      <HeaderBackground>
        <BackButton onPress={navigation.goBack}>
          <BackArrow />
        </BackButton>
        <FillCircleShape
          backgroundColor={colors.lightPink}
          circleDiameter={15}
          left={47}
          top={statusBarHeight + 125}
        />
        <FillCircleShape
          backgroundColor={colors.darkBlue}
          circleDiameter={63}
          left={74}
          top={statusBarHeight + 115}
        />
      </HeaderBackground>
      <BookImage source={{ uri: bookImageUri }} />
      <BookTitle>{bookTitle}</BookTitle>
      <BookAuthor>{bookAuthor}</BookAuthor>
      <ScrollView showsVerticalScrollIndicator={false} style={{ height: 275 }}>
        <BookAbout>{bookAbout}</BookAbout>
      </ScrollView>
    </Wrapper>
  );
}
