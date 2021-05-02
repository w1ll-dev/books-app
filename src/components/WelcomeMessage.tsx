import React from "react";
import {
  MessageText,
  UserName,
  Wrapper,
} from "../styles/components/WelcomeMessage";

interface WelcomeMessageProps {
  username: string;
}

export function WelcomeMessage({ username }: WelcomeMessageProps) {
  return (
    <Wrapper>
      <MessageText>Hi, </MessageText>
      <UserName>{username} </UserName>
      <MessageText>👋</MessageText>
    </Wrapper>
  );
}
