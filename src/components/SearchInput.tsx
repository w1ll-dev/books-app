import React from "react";
import { TextInputProps } from "react-native";
import {
  SearchIcon,
  Wrapper,
  StyledSearchInput,
} from "../styles/components/SearchInput";

interface SearchInputProps extends TextInputProps {
  placeholder: string;
  blurOnSubmit: boolean;
  value: string;
  onChangeText: any;
}

export function SearchInput({
  placeholder,
  onChangeText,
  blurOnSubmit,
  value,
}: SearchInputProps) {
  return (
    <Wrapper>
      <StyledSearchInput
        placeholder={placeholder}
        blurOnSubmit={blurOnSubmit}
        value={value}
        onChangeText={onChangeText}
      />
      <SearchIcon />
    </Wrapper>
  );
}
