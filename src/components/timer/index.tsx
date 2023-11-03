import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import * as S from "./style";

type TimerTextProps = {
  eventText: string;
  timeText: string;
};

export const TimerBox: React.FC<TimerTextProps> = (props) => {
  return (
    <View>
      <S.EventText>{props.eventText}</S.EventText>
      <S.TimerText>{props.timeText} </S.TimerText>
    </View>
  );
};

export const Timer: React.FC = () => {
  const isFocused = useIsFocused();

  const [time, setTime] = React.useState({ lunch: "", home: "" });

  const formatTime = (now: Date, hour: number, minute: number) => {
    const minutes = now.getHours() * 60 + now.getMinutes();
    const target = hour * 60 + minute;
    const diff = target - minutes;

    return diff > 0 ? `${Math.floor(diff / 60)}시간 ${diff % 60}분` : "-";
  };

  const [updateState, setUpdateState] = useState({
    lunchTime: "-",
    homeTime: "-",
  });

  const onUpdate = () => {
    const now = new Date();

    setTime({
      lunch: formatTime(now, 12, 30),
      home: formatTime(now, 16, 10),
    });
  };

  useEffect(() => {
    setInterval(onUpdate, 1000 * 60);
    onUpdate();
  }, [isFocused]);

  return (
    <S.TimerContainer>
      <S.Icon>⏰</S.Icon>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TimerBox
          eventText="점심시간까지"
          timeText={updateState.lunchTime}
        ></TimerBox>
        <TimerBox
          eventText="집에 가기까지"
          timeText={updateState.homeTime}
        ></TimerBox>
      </View>
    </S.TimerContainer>
  );
};
