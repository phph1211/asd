import React, { useState } from "react";
import { PartyContainer } from "../container";

type PartyActionType = {
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PartyAction = ({ setIsHover }: PartyActionType) => {
  const colorChange = () => {
    setIsHover((prev) => !prev);
  };

  return { colorChange };
};
