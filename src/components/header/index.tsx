import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import * as S from "./style";

export const MyHeader: React.FC = () => {
  return (
    <S.Header>
      <S.LogoText>Hanum•</S.LogoText>
      <S.Emoge>🎧</S.Emoge>
    </S.Header>
  );
};
