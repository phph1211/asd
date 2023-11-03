import React from "react";
import * as S from "../style";
import { View } from "react-native";

export const FooterView = () => {
  return (
    <S.FooterBox style={{ borderTopWidth: 1, borderTopColor: "gainsboro" }}>
      <S.EmogeBox>
        <S.FooterItemBox>
          <S.Emoge>🏠</S.Emoge>
          <S.Texts>홈</S.Texts>
        </S.FooterItemBox>

        <S.FooterItemBox>
          <S.Emoge>⏰</S.Emoge>
          <S.Texts>시간표</S.Texts>
        </S.FooterItemBox>
        <S.FooterItemBox>
          <S.Emoge>🔍</S.Emoge>
          <S.Texts>더보기</S.Texts>
        </S.FooterItemBox>
      </S.EmogeBox>
    </S.FooterBox>
  );
};
