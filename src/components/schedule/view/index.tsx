import React from "react";
import { View, Text } from "react-native";
import * as S from "../style";
import { MaterialIcons } from "@expo/vector-icons";

export const ScheduleView = () => {
  return (
    <S.ScheduleBox>
      <S.InfoBox activeOpacity={0.7}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <S.Emoge>📆</S.Emoge>
          <S.Text1>학사일정</S.Text1>
        </View>

        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </S.InfoBox>
    </S.ScheduleBox>
  );
};
