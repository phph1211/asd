import React from "react";
import { HanumpayView } from "./view";
import { HanumPayContainer } from "./container";
import { HanumpayAction } from "./action";

export const HanumPay = () => {
  const { setIsPressed } = HanumPayContainer();
  const actions = HanumpayAction();

  return <HanumpayView {...HanumpayAction} />;
};
