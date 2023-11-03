import styled, { css } from "@emotion/native";
import { View, Text } from "react-native";

export const TimerContainer = styled.TouchableOpacity`
  height: 160px;
  width: 90%;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  display: flex;
`;

export const Icon = styled.Text`
  font-size: 28px;
  font-weight: 900;
`;

export const TimerText = styled.Text`
  font-size: 26px;
  font-weight: 900;
`;

export const Timer = styled.Text`
  font-size: 35px;
  font-weight: 600;
`;

export const EventText = styled.Text`
  font-weight: 900;
  opacity: 0.3;
  margin: 0 auto;
`;
