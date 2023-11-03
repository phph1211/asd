import * as S from "../style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

type PartyViewType = {
  colorChange: () => void;
};

export const PartyView = ({ colorChange }: PartyViewType) => {
  return (
    <>
      <S.PartyContainer activeOpacity={0.5} onPress={colorChange}>
        <S.Emoge>🎉</S.Emoge>
        <S.PartyTextBox>
          <S.PartyText>한세어울림마당 진행 중!</S.PartyText>
          <S.PartySecondText>실시간으로 즐기기</S.PartySecondText>
        </S.PartyTextBox>
        <S.IconBox>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
        </S.IconBox>
      </S.PartyContainer>
    </>
  );
};
