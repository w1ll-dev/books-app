import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import {
  Wrapper,
  ActionButton,
  Label,
  ReadIcon,
  ListenIcon,
  ShareIcon,
} from "../styles/components/DetailsBottomBar";
import { BlankShapeSvg } from "./svg";

export function DetailsBottomBar() {
  return (
    <Wrapper style={styles.boxShadow}>
      <BlankShapeSvg
        width={2}
        height={16}
        marginLeft={104}
        marginTop={20}
        backgroundColor={colors.lightGrey}
      />
      <BlankShapeSvg
        width={2}
        height={16}
        marginLeft={225}
        marginTop={20}
        backgroundColor={colors.lightGrey}
      />
      <ActionButton>
        <ReadIcon />
        <Label>Read</Label>
      </ActionButton>
      <ActionButton>
        <ListenIcon />
        <Label>Listen</Label>
      </ActionButton>
      <ActionButton>
        <ShareIcon />
        <Label>Share</Label>
      </ActionButton>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: colors.grey,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 23,

    elevation: 5,
  },
});
