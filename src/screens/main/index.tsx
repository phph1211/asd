import { MyHeader } from "../../components/header";
import { Party } from "../../components/party";
import { Timer } from "../../components/timer";
import { HanumPay } from "../../components/hanumPay";
import * as S from "./style";
import { Schedule } from "../../components/schedule";
import { Button, StyleSheet, Text, View } from "react-native";
import { Footer } from "../../components/footer";

export const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPageStyle>
        <MyHeader />
        <Party />
        <HanumPay />
        <Timer />
        <Schedule />
        <Footer />
      </S.MainPageStyle>
    </>
  );
};
