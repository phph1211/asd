import styled from "@emotion/native";
import { HanumpayAction } from "./action";
import { colors } from "../../style/clors";
import { HanumPay } from ".";

export const HanumpayBox = styled.View`
  width: 90%;
  background-color: white;
  height: 200px;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

export const BoxInfo = styled.TouchableOpacity`
  margin-top: 10px;
  width: 90%;
  height: 60px;
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

export const Emoge = styled.Text`
  font-size: 30px;
`;

export const title = styled.Text`
  font-weight: 900;
  font-size: 17px;
  margin-left: 10px;
`;

export const MoneyBox = styled.View``;

export const MoneyText = styled.Text`
  font-weight: 900;
  font-size: 30px;
`;

export const PayingButton = styled.TouchableOpacity`
  border-radius: 10px;
  width: 90%;
  height: 45px;
  background-color: #0080ff;
  margin-top: 25px;
`;

export const PayingText = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: 900;
  margin: 10px auto;
`;
