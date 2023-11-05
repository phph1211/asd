import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Animated, Easing } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "../style";
import { colors } from "../../../style/color";
import { HanumpayAction } from "../action";

export const HanumpayView = () => {
  const { isPressed, handlePress, fadeAnim } = HanumpayAction();

  return (
    <S.HanumpayBox>
      <S.BoxInfo
        onPress={handlePress}
        activeOpacity={0.8}
        style={{
          backgroundColor: isPressed ? colors.lightGray : colors.background,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <S.Emoge>💳</S.Emoge>
          <S.title>한움페이</S.title>
        </View>

        <MaterialIcons name="keyboard-arrow-right" size={24} />
      </S.BoxInfo>
      <S.MoneyBox>
        <S.MoneyText>0원</S.MoneyText>
      </S.MoneyBox>
      <S.PayingButton activeOpacity={0.7}>
        <S.PayingText>결제하기</S.PayingText>
      </S.PayingButton>
    </S.HanumpayBox>
  );
};

export default HanumpayView;
