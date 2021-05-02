import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonTitle, Title, Wrapper } from "../styles/components/ListTitle";

interface ListTitleProps {
  title: string;
  buttonTitle: string;
}

export function ListTitle({ title, buttonTitle }: ListTitleProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <TouchableOpacity>
        <ButtonTitle>{buttonTitle}</ButtonTitle>
      </TouchableOpacity>
    </Wrapper>
  );
}
