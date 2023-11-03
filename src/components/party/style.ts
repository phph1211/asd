import styled, { css } from "@emotion/native";

import { View } from "react-native";

export const PartyContainer = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 10px;
  width: 90%;
  height:70px;
  display:flex
  flex-direction: row;
  background-color: white;

  align-items: center;
`;

export const PartyTextBox = styled.View`
  display: flex;
  margin-left: 10px;
`;

export const Emoge = styled.Text`
  font-size: 25px;
`;

export const PartyText = styled.Text`
  font-size: 15px;
  font-weight: 900;
  color: gray;
`;

export const PartySecondText = styled.Text`
  font-size: 17px;
  font-weight: 900;
  color: black;
`;

export const IconBox = styled.View`
  margin-left: 100px;
`;
