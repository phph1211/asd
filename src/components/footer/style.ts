import styled from "@emotion/native";
import { View } from "react-native";

export const FooterBox = styled.View`
  width: 100%;
  height: 70px;
  background-color: white;
  position: absolute;
  bottom: 0;
  border-top: 10px solid red;
`;

export const EmogeBox = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const FooterItemBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Texts = styled.Text`
  font-size: 15px;
  font-weight: 900;
`;

export const Emoge = styled.Text`
  font-size: 22px;
`;
