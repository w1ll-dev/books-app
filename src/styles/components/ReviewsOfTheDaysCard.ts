import styled from "styled-components/native";
import { Container } from "../Common";

export const Wrapper = styled(Container)``;

export const BackgroundImage = styled.Image.attrs((props) => ({
  source: require("../../assets/images/background.png"),
}))`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
