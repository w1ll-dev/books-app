import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { DetailsBottomBar } from "../components/DetailsBottomBar";
import {
  CircleSvg,
  FillCircleShape,
  OvalSvgDetailsBigger,
  OvalSvgDetailsMinor,
} from "../components/svg";
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
  ContentWrapper,
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
      <HeaderBackground />
      <BackButton onPress={navigation.goBack}>
        <BackArrow />
      </BackButton>
      <FillCircleShape
        backgroundColor={colors.lightPink}
        circleDiameter={15}
        left={57}
        top={statusBarHeight + 125}
      />
      <FillCircleShape
        backgroundColor={colors.darkBlue}
        circleDiameter={63}
        left={84}
        top={statusBarHeight + 115}
      />
      <OvalSvgDetailsBigger />
      <OvalSvgDetailsMinor />
      <CircleSvg size={24} radius={12} top={86} left={249} />
      <BookImage source={{ uri: bookImageUri }} />
      <ContentWrapper>
        <BookTitle>{bookTitle}</BookTitle>
        <BookAuthor>{bookAuthor}</BookAuthor>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: 275 }}
        >
          <BookAbout>{bookAbout}</BookAbout>
        </ScrollView>
      </ContentWrapper>
      <DetailsBottomBar />
    </Wrapper>
  );
}
