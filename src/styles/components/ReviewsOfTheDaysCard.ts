import styled from "styled-components/native";
import { Container } from "../Common";

export const Wrapper = styled(Container)``

export const BackgroundImage = styled.Image.attrs((props) => ({
  source: require('../../assets/images/background.png'),
}))`
  width: 100%;
`;